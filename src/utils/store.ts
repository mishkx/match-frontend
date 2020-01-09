import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Middleware, Store as BaseStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { IS_DEV } from '../constants/settings';
import createRootReducer from '../reducers';
import rootSaga from '../sagas';
import history from './history';

interface Store extends BaseStore {
    runSaga: SagaMiddleware['run'];
}

const configureStore = (history: History): Store => {
    const composeEnhancers = (IS_DEV && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const sagaMiddleware = createSagaMiddleware();
    const logger = createLogger({
        duration: true,
    });

    const middlewares: Middleware[] = [
        sagaMiddleware,
        routerMiddleware(history),
        logger,
    ];

    const store: Store = createStore(
        createRootReducer(history),
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    if (IS_DEV && module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer(history));
        })
    }

    store.runSaga = sagaMiddleware.run;

    return store;
};

const store = configureStore(history);
store.runSaga(rootSaga);

export default store;

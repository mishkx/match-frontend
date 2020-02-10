import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { Store as BaseStore, Middleware, applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { IS_DEV } from 'src/constants';
import createRootReducer from 'src/reducers';
import rootSaga from 'src/sagas';
import createdHistory from './history';

interface Store extends BaseStore {
    runSaga: SagaMiddleware['run'];
}

const configureStore = (history: History): Store => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-underscore-dangle
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

    store.runSaga = sagaMiddleware.run.bind(sagaMiddleware);

    return store;
};

const configuredStore = configureStore(createdHistory);
configuredStore.runSaga(rootSaga);

export default configuredStore;


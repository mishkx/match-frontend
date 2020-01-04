import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { IS_DEV } from '../constants/settings';
import createRootReducer from '../reducers';

interface IStore extends Store {
    runSaga: SagaMiddleware["run"];
}

const configureStore = (history: History): IStore => {
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

    const store = {
        ...createStore(
            createRootReducer(history),
            composeEnhancers(applyMiddleware(...middlewares)),
        ),
        runSaga: sagaMiddleware.run,
    };

    if (IS_DEV && module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer(history));
        })
    }

    return store;
};

export default configureStore;

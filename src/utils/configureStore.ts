import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import createRootReducer from '../reducers';

const configureStore = (history: History) => {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middlewares: Middleware[] = [
        routerMiddleware(history),
    ];

    return createStore(
        createRootReducer(history),
        composeEnhancers(applyMiddleware(...middlewares)),
    );
};

export default configureStore;

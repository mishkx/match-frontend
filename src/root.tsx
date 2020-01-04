import { hot } from 'react-hot-loader/root';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { IS_DEV } from './constants/settings';
import configureStore from './utils/configureStore';
import App from './ui/App';
import history from './utils/history';
import routes from './routes';
import rootSaga from './sagas'

const store = configureStore(history);
store.runSaga(rootSaga);

const Root: React.FC = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                {routes}
            </App>
        </ConnectedRouter>
    </Provider>
);

export default IS_DEV ? hot(Root) : Root;

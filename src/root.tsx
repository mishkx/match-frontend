import { hot } from 'react-hot-loader/root';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { IS_DEV } from './constants/settings';
import App from './ui/App';
import history from './utils/history';
import store from './utils/store';
import routes from './routes';

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

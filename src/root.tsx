import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { IS_DEV } from 'src/constants';
import { AppContainer } from 'src/containers';
import routes from 'src/routes';
import { history, store } from 'src/utils';

const Root: React.FC = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer>
                {routes}
            </AppContainer>
        </ConnectedRouter>
    </Provider>
);

export default IS_DEV ? hot(Root) : Root;

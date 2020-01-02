import React  from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import * as serviceWorker from './serviceWorker';

const ROOT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(<Root/>, ROOT_NODE);

serviceWorker.unregister();

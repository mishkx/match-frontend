import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'src/root';
import 'moment/locale/ru';
import './i18n';

const ROOT_ELEMENT_ID = 'root';
const ROOT_NODE = document.getElementById(ROOT_ELEMENT_ID) as HTMLElement;

ReactDOM.render(<Root/>, ROOT_NODE);

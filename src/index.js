// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './static/scss/app.scss';

// Store
import { Provider } from 'react-redux';
import { configureStore } from './core/store';

import { App } from './views';

const mountNode = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);

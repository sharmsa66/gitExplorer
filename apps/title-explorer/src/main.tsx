import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { gitExpStore as store } from '@git-explorer/data';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

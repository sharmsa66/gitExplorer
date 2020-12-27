import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import {burgerStore} from '@git-explorer/data';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={burgerStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

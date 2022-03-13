import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import { AppComponent } from '@/app/app.component';
// import { store } from './app/shared/store/index';

const ROOT = document.querySelector('#app');

ReactDOM.render(
  // <Provider store={store}>
    <AppComponent />
  // </Provider>
, ROOT);

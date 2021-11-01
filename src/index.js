import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.component';
import { Provider } from 'react-redux';

import { storeInstance } from './redux/store';

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>
, document.getElementById('root'));
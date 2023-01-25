import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { initialize } from '@moesol/inter-widget-communication'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

initialize({
  busUrl: 'http://localhost:9090/ozp-iwc-1.2.4'
})

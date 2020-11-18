import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';

import '@atlaskit/css-reset';
import '@fortawesome/fontawesome-free/css/all.css';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

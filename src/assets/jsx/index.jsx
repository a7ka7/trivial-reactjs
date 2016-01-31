import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import config from './config';

ReactDOM.render(
  <App config={config} />,
  document.getElementById('app')
);

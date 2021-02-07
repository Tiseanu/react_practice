import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import CounterComp from './components/counterComp';

ReactDOM.render(
    <CounterComp />,
  document.getElementById('root')
);

reportWebVitals(console.log);

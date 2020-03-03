// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import HolaMundo from './components/HolaMundo'

render(<HolaMundo nombre="Williams" edad="29"/>, document.querySelector('#root'));
serviceWorker.unregister();
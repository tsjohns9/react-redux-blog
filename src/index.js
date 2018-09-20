import './index.css';
import './bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// loads app to DOM

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

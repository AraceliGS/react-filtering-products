import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilteringApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FilteringApp />, document.getElementById('root'));
registerServiceWorker();

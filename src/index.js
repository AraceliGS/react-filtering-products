import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './lib/store';
import FilteringApp from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <FilteringApp/>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

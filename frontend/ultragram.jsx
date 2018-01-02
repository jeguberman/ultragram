import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import Test from './test_suite';
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", ()=> {
  Test();
  debugger
  const store=configureStore();
  const root = document.getElementById('root');

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  debugger
  ReactDOM.render(<Root store={store}/>, root);
});

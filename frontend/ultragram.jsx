import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import Test from './test_suite';
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", ()=> {


  let store;

  if (window.currentUser){
    const preloadedstate = {
      session: { currentUserID: window.currentUser.id },
      users: {
        [window.currentUser.id]: window.currentUser
      }
    };
    store = configureStore(preloadedstate);
    delete window.currentUser;
  }else{
    store = configureStore();
  }

  const root = document.getElementById('root');

  Test();
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={store}/>, root);
}) ;

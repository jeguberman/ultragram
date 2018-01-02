import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import Test from './test_suite';



document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

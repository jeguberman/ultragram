import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';


const Brick = ()=>{
  return (<p>from entry file</p>);
};

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

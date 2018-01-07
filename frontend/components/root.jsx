import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => {

  return (
  <Provider store={store}>

    <HashRouter>

      <App />
    </HashRouter>
  </Provider>
  );
};

// const Root = ({store}) => {
//   return(<div>you reached the Root component</div>)
// }

export default Root;

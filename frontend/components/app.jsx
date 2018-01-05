import React from 'react';
// import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import UserContainer from './user/user_container';
import { HomeRoute } from '../util/route-util';



const App = () => {
  return (
    <div>

        <Route exact path="/users" render={
          ()=>(<Redirect push to="/" />)
        } />

        <Switch>

          <Route path="/users/5" component={UserContainer} />
          <Route exact path="/" component={SessionFormContainer} />

        </Switch>

    </div>
  );
};



export default App;

// <Route exact path="/users" render={
//     ()=>(<Redirect push to="/" />)
//   } />

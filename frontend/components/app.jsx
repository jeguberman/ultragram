import React from 'react';
// import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import UserContainer from './session_form/session_form_container';
import { HomeRoute } from '../util/route-util';


const App = () => {
  return (
    <div>


        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/users" render={
              ()=>(<Redirect push to="/" />)
            } />
          <Route path="/users/:userId" component={UserContainer} />

        </Switch>

    </div>
  );
};



export default App;

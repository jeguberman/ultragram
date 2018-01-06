import React from 'react';
// import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
// import UserContainer from './user/user_container';
import ImageContainer from './image/image_container';
import ImageIndexContainer from './image/image_index_container';
import { HomeRoute } from '../util/route-util';



const App = () => {
  return (
    <div>

      <Route exact path="/users" render={
          ()=>(<Redirect push to="/" />)
        } />
      <Route exact path="/images" render={
          ()=>(<Redirect push to="/" />)
        } />

        <Switch>

          <Route path="/images/:imageId" component={ImageContainer} />
          <Route exact path="/" component={ImageContainer} />

        </Switch>

    </div>
  );
};



export default App;

// <Route path="/users/:id" component={UserContainer} />

// <Route exact path="/users" render={
//     ()=>(<Redirect push to="/" />)
//   } />

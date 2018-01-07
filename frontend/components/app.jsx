import React from 'react';
// import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';

// import SessionFormContainer from './session_form/session_form_container';
// import UserContainer from './user/user_container';
import ImageShowContainer from './image/image_show_container';
import ImageIndexContainer from './image/image_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { HomeRoute, AuthRoute } from '../util/route-util';



const App = () => {

  return (
    <div className="top-level">

      <div className="header-component">

        <AuthRoute path="/" component={NavBarContainer} />
      </div>

      <div className="body-component">

      <Route exact path="/users" render={
          ()=>(<Redirect push to="/" />)
        } />
      <Route exact path="/images" render={
          ()=>(<Redirect push to="/" />)
        } />

      <Switch>
        <Route path="/images/:imageId" component={ImageShowContainer} />
        <Route exact path="/" component={HomeRoute} />
      </Switch>
      </div>

    </div>
  );
};

// const App = () => {
//   return(<div>you reached the App component</div>)
// }



export default App;

// <Route path="/users/:id" component={UserContainer} />

// <Route exact path="/users" render={
//     ()=>(<Redirect push to="/" />)
//   } />

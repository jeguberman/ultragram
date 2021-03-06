import React from 'react';
// import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';

// import SessionFormContainer from './session_form/session_form_container';
import UserContainer from './user/user_container';
import FeedItemContainer from './image/feed_item_container';
import ImageIndexContainer from './image/image_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ImageFormContainer from './image/image_form_container';
import ImageShowContainer from './image/image_show_container';
import { HomeRoute, AuthRoute } from '../util/route-util';



const App = () => {

  return (
    <div className="top-level">
      <div className="background-layer"></div>
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
            <AuthRoute path="/newImage" component={ ImageFormContainer } formType="newImage" />
            <AuthRoute exact path="/:username" component={ UserContainer } />
            <AuthRoute path="/images/:id" component={ ImageShowContainer } />
            <Route exact path="/" component={ HomeRoute } />
          </Switch>

      </div>

    </div>
  );
};





export default App;
// <Route path="/images/:imageId" component={ImageShowContainer} />
// <Route path="/users/:id" component={UserContainer} />

// <Route exact path="/users" render={
//     ()=>(<Redirect push to="/" />)
//   } />

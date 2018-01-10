import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import SessionFormContainer from '../components/session_form/session_form_container';
import NavBarContainer from '../components/nav_bar/nav_bar_container';
import ImageIndexContainer from '../components/image/image_index_container';


const mapStateToProps = (state, ownProps) => {

  return {
    loggedIn: Boolean(state.session.currentUserID )
  };
};

const Auth = ({ loggedIn, component: Component, path }) => {
  return (
    <Route path={path} render={(props)=>{
      if(loggedIn){
        return <Component {...props} />
      }else{
        return <Redirect to="/" />
      }
    }}/>
  )
};

const Home = ( { loggedIn } ) => {

  if(loggedIn){
    return (<ImageIndexContainer />);
    // return (<SessionFormContainer />);
  }else{
    return (<SessionFormContainer />);
  }
}; //if loggedIn === true or false; renders either the session form or the home screen






export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const HomeRoute = withRouter(connect(mapStateToProps,null)(Home)); //I am extremely unhappy calling this HomeRoute, because it doesn't use routes. But I don't know what else to call it.

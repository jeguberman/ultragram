import React from 'react';
import { connect } from 'react-redux';
// import { Route, Redirect, withRouter } from 'react-router-dom';

import SessionFormContainer from '../components/session_form/session_form_container';
import FeedComponentContainer from '../components/feed/feed_component_container';

const Auth = ( { loggedIn } ) => {
  // debugger
    if(loggedIn){
      return (<FeedComponentContainer />);
    }else{
      return (<SessionFormContainer />);
    }
  }; //if loggedIn === true or false; renders either the session form or the home screen



const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const HomeRoute = connect(mapStateToProps)(Auth); //I am extremely unhappy calling this HomeRoute, because it doesn't use routes. But I don't know what else to call it.

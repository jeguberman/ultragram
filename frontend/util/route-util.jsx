import React from 'react';
import { connect } from 'react-redux';
// import { Route, Redirect, withRouter } from 'react-router-dom';

import SessionFormContainer from '../components/session_form/session_form_container';

const Auth = ( { component: Component, loggedIn } ) => {

    if(loggedIn){
      return (<SessionFormContainer />);
    }else{
      return (<SessionFormContainer />);
    }
  }; //if loggedIn === true or false; renders either the session form or the home screen



const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const HomeRoute = connect(mapStateToProps, null)(Auth);

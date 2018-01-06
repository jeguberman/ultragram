import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import SessionFormContainer from '../components/session_form/session_form_container';
import ImageIndex from '../components/image/image_index_container';

const Home = ( { loggedIn, match } ) => {
  console.log(match);
  debugger
  if(loggedIn){
    return (<ImageIndex {...props} />);
  }else{
    return (<SessionFormContainer />);
  }
}; //if loggedIn === true or false; renders either the session form or the home screen






const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const HomeRoute = withRouter(connect(mapStateToProps)(Home)); //I am extremely unhappy calling this HomeRoute, because it doesn't use routes. But I don't know what else to call it.

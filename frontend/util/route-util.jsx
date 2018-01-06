import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import SessionFormContainer from '../components/session_form/session_form_container';
import ImageIndex from '../components/image/image_index_container';


const mapStateToProps = (state, ownProps) => {

  return {
    loggedIn: Boolean(state.session.currentUser )
  };
};


const Home = ( { loggedIn } ) => {
  // console.log(match);

  if(loggedIn){
    return (<ImageIndex />);
  }else{
    return (<SessionFormContainer />);
  }
}; //if loggedIn === true or false; renders either the session form or the home screen








export const HomeRoute = withRouter(connect(mapStateToProps,null)(Home)); //I am extremely unhappy calling this HomeRoute, because it doesn't use routes. But I don't know what else to call it.

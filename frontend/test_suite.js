import * as SessionActions from './actions/session_actions.js';

const Test = () => {
  window.createUser = SessionActions.createUser;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;

};

export default Test;

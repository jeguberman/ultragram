import * as SessionActions from './actions/session_actions.js';
import * as ImageActions from './actions/image_actions.js';
import * as UserActions from './actions/user_actions.js';

const Test = () => {


  window.createUser = SessionActions.createUser;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  window.fetchImage = ImageActions.fetchImage;
  window.fetchImages = ImageActions.fetchImages;
  window.removeImage = ImageActions.removeImages;
  window.fetchUser = UserActions.fetchUser;

};

export default Test;

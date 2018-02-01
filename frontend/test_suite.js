
import * as SessionActions from './actions/session_actions.js';
import * as ImageActions from './actions/image_actions.js';
import * as UserActions from './actions/user_actions.js';
import * as CommentActions from './actions/comment_actions.js';
import * as LikeActions from './actions/like_actions.js';
import * as FollowActions from './actions/follow_actions.js';


const Test = () => {


  window.createUser = SessionActions.createUser;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  window.fetchImage = ImageActions.fetchImage;
  window.fetchImages = ImageActions.fetchImages;
  window.removeImage = ImageActions.removeImages;
  window.fetchUser = UserActions.fetchUser;
  window.postComment = CommentActions.postComment;
  window.postLike = LikeActions.postLike;
  window.deleteLike = LikeActions.deleteLike;
  window.postFollow = FollowActions.postFollow;
  window.deleteFollow = FollowActions.deleteFollow;
};

export default Test;

import UserComponent from './user_component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { postFollow, deleteFollow } from '../../actions/follow_actions';


const mapStateToProps = (state,ownProps) => {
  let userlist = Object.values(state.users);
  let user = userlist.find(
    (u)=> u.username === ownProps.match.params.username);
  let images = Object.values(state.images);
  let currentUserID = state.session.currentUserID;
  let following, currentUserFollowing;
  if(user){
    currentUserFollowing = state.users[currentUserID].following;
    following = currentUserFollowing.includes(user.id);
    // debugger
    images = images.filter(img=>img.author_id===user.id);
  }
    return {
      username: ownProps.match.params.username,
      user,
      images,
      currentUserID,
      following,
      currentUserFollowing
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (username) => dispatch(fetchUser(username)),
    postFollow: (followData) => dispatch(postFollow(followData)),
    deleteFollow: (followData) => dispatch(deleteFollow(followData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

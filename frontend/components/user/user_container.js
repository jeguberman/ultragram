import UserComponent from './user_component';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { postFollow, deleteFollow } from '../../actions/follow_actions';


const mapStateToProps = (state,ownProps) => {

  let userlist = Object.values(state.users);
  let user = userlist.find((u)=>u.username === ownProps.match.params.username);
  let images = Object.values(state.images);
  images = images.filter(img=>img.author_id===user.id);
  let currentUserID = state.session.currentUserID;
  let following;
  if(user){
    following = state.users[currentUserID].following;
    debugger
    following = following.includes( (userID => userID === user.id));
  }
    return {
      username: ownProps.match.params.username,
      user,
      images,
      currentUserID,
      following
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (username) => dispatch(fetchUser(username)),
    postFollow: (followdata) => dispatch(postFollow(followData)),
    deleteFollow: (followData) => dispatch(deleteFollow(followData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

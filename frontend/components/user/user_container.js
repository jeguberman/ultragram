import UserComponent from './user_component';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { fetchUser, updateUser } from '../../actions/user_actions';
import find from 'lodash/find';
import pickBy from 'lodash/pickby';
import startsWith from 'lodash/startsWith';
import forOwn from 'lodash/forOwn';

const mapStateToProps = (state,ownProps) => {

  let userlist = Object.values(state.users);

  userlist = users.filter(
    (user) => {
      return user.username==="demo";
    }
  );

  if( userlist.length !== 0 ){
    let user = userlist[0];
    let images = Object.values(state.images);
    images = images.filter(
      (image) => {
        return image.author = user;
      }
    )
  }

  return {
    username: ownProps.match.params.username,
    images: state.images
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (username) => dispatch(fetchUser(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

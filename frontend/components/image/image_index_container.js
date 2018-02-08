import {connect} from 'react-redux';
import ImageIndexComponent from './image_index';
import { fetchPosts } from '../../actions/image_actions.js';
import { postLike, deleteLike } from '../../actions/like_actions.js';

const mapStateToProps = (state, ownProps) =>{
  let images = Object.values(state.images);
  let following = state.users[state.session.currentUserID].following.map(user=>user.id);
  images = images.filter(img => following.includes(img.author_id));

  return {
    images
  };
};

const mapDisptchToProps = (dispatch, ownProps) => {
  return {
    fetchImages: ()=> dispatch(fetchImages()),
    postLike: (like) => dispatch(postLike(like)),
    deleteLike: (like) => dispatch(postLike(like))
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ImageIndexComponent);

import {connect} from 'react-redux';
import ImageIndexComponent from './image_index';
import { fetchPosts } from '../../actions/image_actions.js';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) =>{
  let images = Object.values(state.images);

  return {
    images
  };
};

const mapDisptchToProps = (dispatch, ownProps) => {
  return {
    fetchImages: ()=> dispatch(fetchImages()),
    fetchUser: (id)=> dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ImageIndexComponent);

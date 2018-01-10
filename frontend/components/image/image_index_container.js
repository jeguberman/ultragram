import {connect} from 'react-redux';
import ImageIndexComponent from './image_index';
import { fetchPosts } from '../../actions/image_actions.js';
import { fetchUsersByIds } from '../../actions/user_actions';
import { authorsOfImages } from '../../util/selectors';

const mapStateToProps = (state, ownProps) =>{
  let images = Object.values(state.images);
  return {
    images
  };
};

const mapDisptchToProps = (dispatch, ownProps) => {
  return {
    fetchImages: ()=> dispatch(fetchImages()),
    fetchUsersByIds: (id)=> dispatch(fetchUsersByIds(id))
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ImageIndexComponent);

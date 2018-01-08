import {connect} from 'react-redux';
import ImageIndexComponent from './image_index';
import { fetchPosts } from '../../actions/image_actions.js';

const mapStateToProps = (state, ownProps) =>{
  let images = Object.values(state.images);
  let userIds = images.map((image)=>{return(image.id);});
  return {
    userIds,
    images
  };
};

const mapDisptchToProps = (dispatch, ownProps) => {
  return {
    fetchImages: ()=> dispatch(fetchImages())
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ImageIndexComponent);

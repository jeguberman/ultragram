import { RECEIVE_IMAGE, RECEIVE_IMAGES, REMOVE_IMAGE } from '../actions/image_actions';
import  merge  from 'lodash/merge';

const ImageReducer = ( oldState = {}, action ) => {


  let newState = merge( {}, oldState);
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_IMAGE:
      newState[action.image.id] = action.image;
      return newState;
    case RECEIVE_IMAGES:
      return action.images;
    case REMOVE_IMAGE:
      delete newState[action.imageId];
      return newState;
    default:
      return oldState;
  }
};

export default ImageReducer;

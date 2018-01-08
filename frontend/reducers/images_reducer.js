import { RECEIVE_IMAGE, RECEIVE_IMAGES, REMOVE_IMAGE } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import  merge  from 'lodash/merge';

const ImageReducer = ( oldState = {}, action ) => {
  // debugger
  let newState = merge( {}, oldState);
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_IMAGE:
      newState[action.image.id] = action.image;
      return newState;
    case RECEIVE_IMAGES:
      action.images.forEach(
        (imageJSON) => (merge(newState,imageJSON))
      );
      return newState;
    // case RECEIVE_CURRENT_USER:
    //   newImage = action.
    case REMOVE_CURRENT_USER:
      return null;
    case REMOVE_IMAGE:
      delete newState[action.imageId];
      return newState;
    default:
      return oldState;
  }
};

export default ImageReducer;

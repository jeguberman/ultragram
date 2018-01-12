import { RECEIVE_IMAGE, RECEIVE_IMAGES, REMOVE_IMAGE } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import  merge  from 'lodash/merge';

const ImageReducer = ( oldState = {}, action ) => {


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
    case REMOVE_CURRENT_USER:
      return {};
    case RECEIVE_USER:
      action.images.forEach(
        (image)=>newState[image.id]=image
      );
      return newState;
    case REMOVE_IMAGE:
      delete newState[action.imageId];
      return newState;
    default:
      return oldState;
  }
};

export default ImageReducer;

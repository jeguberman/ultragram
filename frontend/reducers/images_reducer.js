import { RECEIVE_IMAGE } from '../actions/image_actions';
import { merge } from 'lodash/merge';

const ImageReducer = ( oldState = {}, action ) => {
  let newState=oldState;
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_IMAGE:
    console.console.log("made it this far");
    newState[action.image.id] = action.image;
    return newState;
    default:
    return oldState;
  }
};

export default ImageReducer;

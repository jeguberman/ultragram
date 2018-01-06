import { RECEIVE_IMAGE } from './actions/image_actions';
import { merge } from 'lodash/merge';

const imageReducer = ( oldState = {}, action ) => {
  let newState=oldState;
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_IMAGE:
    newstate[action.image.id] = action.image;
  }
};

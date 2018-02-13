import * as FollowAPI from '../util/follow_util';
import { receiveUser } from './user_actions';



export const postFollow = username => dispatch => {
  // console.log("follow action before request");
  FollowAPI.postFollow(username)
  .then(
    (response) => {
      // console.log("follow action after ajax before action creator");
      // dispatch(receiveUser(response));
      doubleDispatch(response);
    }
  );
};

export const deleteFollow = username => dispatch => {
  // console.log("follow action before request");
  FollowAPI.deleteFollow(username)
  .then(
    (response) => {
      // console.log("follow action after ajax before action creator");
      doubleDispatch(response);
    }
  );
};

const doubleDispatch = (response) => {
  dispatch(receiveUser(response[0]));
  dispatch(receiveUser(response[1]));
};

// const receiveFollows = ( response ) => {
// return {
//   type: RECEIVE_FOLLOWS,
//   users: response
// }
//
// }

import * as FollowAPI from '../util/follow_util';
import { receiveUser } from './user_actions';

export const postFollow = username => {
  FollowAPI.postFollow(username)
  .then(
    (response) => (dispatch(receiveUser(response)))
  );
};

export const deleteFollow = followData => {
  FollowAPI.deleteFollow(followData)
  .then(
    (response) => (dispatch(receiveUser(response)))
  );
};

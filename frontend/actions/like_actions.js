import * as LikeAPI from '../util/like_util';
import { receiveImage } from './image_actions';

export const postLike = likeData => dispatch => {
  LikeAPI.postLike(likeData)
  .then(
    (response) => (dispatch(receiveImage(response)))
  );
};

export const deleteLike = likeData => dispatch =>{
  LikeAPI.deleteLike(likeData)
  .then(
    (response) => (dispatch(receiveImage(response)))
  );
};

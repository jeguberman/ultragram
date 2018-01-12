import React from 'react';
import {Link} from 'react-router-dom'

const commentItem =( { comment } )=>{

  return(
    <li className="comment-item">
      <Link to={`/${comment.username}`}  className="author-name">{comment.username}</Link>&nbsp;
      {comment.body}
    </li>
  );
};

export default commentItem;

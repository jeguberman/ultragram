import React from 'react';

const commentItem =( { comment } )=>{

  return(
    <li className="comment-item">
      <div className="author-name">{comment.username}</div>&nbsp;
      {comment.body}
    </li>
  );
};

export default commentItem;

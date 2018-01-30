export const postComment = (comment) => {
  return(
    $.ajax({
      url:'api/comments',
      method: 'POST',
      data: {comment}
    })
  );
};

export const deleteComment = (commentId) => {
  return (
    $.ajax({
      url: `api/comments/${commentId}`,
      method: 'delete'
    })
  );
};

export const postComment = (comment) => {
  return(
    $.ajax({
      url:'api/comments',
      method: 'POST',
      data: {comment}
    })
  );
};

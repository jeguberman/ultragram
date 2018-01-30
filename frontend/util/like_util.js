export const postLike = (like) => {
  return (
    $.ajax({
      url:`api/images/${like.image_id}/likes`,
      method: 'POST',
      data: {like}
    })
  );
};

export const deleteLike = (like) => {
  return (
    $.ajax({
      url:`api/images/${like.image_id}/likes`,
      method: 'DELETE',
      data: {like}
    })
  );
};

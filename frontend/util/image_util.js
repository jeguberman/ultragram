export const fetchImages = () => {
  return(
    $.ajax({
      url:'api/images'
    })
  );
};

export const fetchImage = (imageId) => {
  return(
    $.ajax({
      url:`api/images/${imageId}`
    })
  );
};

export const fetchImageByUser = (userID) => {
  return(
    $.jax({
      url: `api/images`,
      data: userID
    })
  );
};

export const postImage = (imageData) => {
  return (
    $.post({
      url:`api/images`
    })
  );
};

export const updateImage = (imageData) => {
  return (
    $.ajax({
      url:`api/images/${imageData.id}`,
      method: 'PATCH'
    })
  );
};

export const deleteImage = (imageId) => {
  return (
    $ajax({
      url:`api/images/${imageId}`,
      method: 'DELETE'
    })
  );
};

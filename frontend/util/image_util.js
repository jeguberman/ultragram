const fetchImages = () => {
  return(
    $.get({
      url:'api/images'
    })
  );
};

const fetchImage = (imageId) => {
  return(
    $.ajax({
      url:`api/images/${imageId}`
    })
  );
};

const fetchImageByUser = (userID) => {
  return(
    $.get({
      url: `api/images`,
      data: userID
    })
  );
};

const createImage = (imageData) => {
  return (
    $.post({
      url:`api/images`
    })
  );
};

const updateImage = (imageData) => {
  return (
    $.ajax({
      url:`api/images/${imageData.id}`,
      method: 'PATCH'
    })
  );
};

const deleteImage = (imageId) => {
  return (
    $ajax({
      url:`api/images/${imageId}`,
      method: 'DELETE'
    })
  );
};

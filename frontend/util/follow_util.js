export const postFollow = (username) => {
  return (
    $.ajax({
      url:`api/${username}/follows`,
      method: 'POST'
    })
  );
};

export const deleteFollow = (username) => {
  return (
    $.ajax({
      url:`api/${username}/follows`,
      method: 'DELETE'
    })
  );
};

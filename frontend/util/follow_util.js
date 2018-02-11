export const postFollow = (username) => {
  debugger
  return (
    $.ajax({
      url:`api/${username}/follows`,
      method: 'POST'
    })
  );
};

export const deleteFollow = (follow) => {
  return (
    $.ajax({
      url:`api/follows`,
      method: 'DELETE',
      data: { follow }
    })
  );
};

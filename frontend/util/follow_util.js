export const postFollow = (follow) => {
  return (
    $.ajax({
      url:`api/follows/`,
      method: 'POST',
      data: {follow}
    })
  );
};

export const deleteFollow = (follow) => {
  return (
    $.ajax({
      url:`api/follows`,
      method: 'DELETE',
      data: {follow}
    })
  );
};

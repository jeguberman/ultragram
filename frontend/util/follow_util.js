export const postFollow = (username) => {
  console.log("follow util before ajax");
  return (
    $.ajax({
      url:`api/${username}/follows`,
      method: 'POST'
    })
  );
};

export const deleteFollow = (username) => {
  console.log("follow util before ajax");

  return (
    $.ajax({
      url:`api/${username}/follows`,
      method: 'DELETE'
    })
  );
};

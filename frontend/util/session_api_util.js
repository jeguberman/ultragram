export const createUser = (user) => {
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: {user}
  });
};

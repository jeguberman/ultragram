export const createUser = (user) => {
  return (
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: {user}
    })
  );
};

export const loginUser = (user) => {
  return (
    $.ajax({
      url: 'api/session',
      method: 'POST'
    })
  );
};

export const logoutUser = (user) => {
  return (
    $.ajax({
      url: 'api/session',
      method: 'DESTROY'
    })
  );
};

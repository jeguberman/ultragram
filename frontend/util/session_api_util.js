export const createUser = (user) => {
  return (
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: {user}
    })
  );
};

export const login = (user) => {
  return (
    $.ajax({
      url: 'api/session',
      method: 'POST'
    })
  );
};

export const logout = (user) => {
  return (
    $.ajax({
      url: 'api/session',
      method: 'DELETE'
    })
  );
};

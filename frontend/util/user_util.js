export const fetchUser = (username) => {

  return (
    $.ajax({
      url: `api/${username}`,
      data: username,
      username: username
    })
  );
};

export const fetchUsers = () => {
  return (
    $.ajax({
      url: `api/users`
    })
  );
};

export const updateUser = (user) => {
  return (
    $.ajax({
      url: `api/users/${user.id}`,
      method: 'PATCH',
      data: user
    })
  );
};

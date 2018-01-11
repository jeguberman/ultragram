export const fetchUser = (id) => {
  return (
    $.ajax({
      url: `api/users/${id}`
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
      url: `api/users/${id}`,
      method: 'PATCH'
    })
  );
};

export const fetchUsersByIds = (ids) => {

  return(
    $.ajax({
      url:`api/users`,
      data: ids
    })
  );
};

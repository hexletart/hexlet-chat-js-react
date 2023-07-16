const getAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('userId'));
  return token ? { Authorization: `Bearer ${token}` } : null;
};

const getAuthUserName = () => localStorage.getItem('userName');

export {
  getAuthHeader,
  getAuthUserName,
};

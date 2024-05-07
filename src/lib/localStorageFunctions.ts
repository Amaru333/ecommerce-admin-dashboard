export const setLocalStorageAuthToken = (token: string) => {
  console.log(token);
  localStorage.setItem("foneadmin-auth-token", token);
};

export const getLocalStorageAuthToken = () => {
  return localStorage.getItem("foneadmin-auth-token");
};

export const removeLocalStorageAuthToken = () => {
  localStorage.removeItem("foneadmin-auth-token");
};

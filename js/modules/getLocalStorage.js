const getLocalStorage = (str) => {
  if (localStorage.getItem(str)) {
    return JSON.parse(localStorage.getItem(str));
  }
  return [];
};

export default getLocalStorage;
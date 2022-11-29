const setLocalStorage = (arr, str) => {
  localStorage.setItem(str, JSON.stringify(arr));
};

export default setLocalStorage;
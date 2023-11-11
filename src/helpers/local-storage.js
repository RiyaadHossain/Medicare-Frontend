export const setToLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

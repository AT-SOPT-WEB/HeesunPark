export const getTodos = (key, value) => {
  const storedData = localStorage.getItem(key);

  if (storedData) {
    return JSON.parse(storedData);
  } else {
    setTodos(key, value);
  }
  return value;
};

export const setTodos = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

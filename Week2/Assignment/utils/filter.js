export const filterByStatus = (todos, status) => {
  switch (status) {
    case 'complete':
      return todos.filter((todo) => todo.completed);
    case 'incomplete':
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

export const filterByPriority = (todos, priority) => {
  if (!priority) return todos;
  return todos.filter((todo) => String(todo.priority) === String(priority));
};

export const filterTodos = (todos, status, priority) => {
  const filteredByStatus = filterByStatus(todos, status);
  return filterByPriority(filteredByStatus, priority);
};

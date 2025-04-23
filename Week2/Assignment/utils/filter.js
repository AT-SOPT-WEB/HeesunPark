export const filterByStatus = (todos, status) => {
  switch (status) {
    case 'complete':
      return todos.filter((list) => list.completed);
    case 'incomplete':
      return todos.filter((list) => !list.completed);
    default:
      return todos;
  }
};

export const filterByPriority = (todos, priority) => {
  if (!priority) return todos;
  return todos.filter((list) => list.priority === priority);
};

export const filterTodos = (todos, status, priority) => {
  const filterStatus = filterByStatus(todos, status);
  const filterPriority = filterByPriority(filterStatus, priority);

  return filterPriority;
};

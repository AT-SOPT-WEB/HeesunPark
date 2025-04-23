export const addRow = (id) => {
  const input = document.querySelector('.todo-form__input');
  const selectPriority = document.getElementById('todo-priority');

  const title = input.value;
  const priority = Number(selectPriority.value);

  if (!title || !priority) {
    alert('모든 항목이 채워지지 않았습니다');
    return;
  }

  const newTodo = {
    id: id,
    title,
    completed: false,
    priority,
  };

  input.value = '';
  selectPriority.value = '';

  return newTodo;
};

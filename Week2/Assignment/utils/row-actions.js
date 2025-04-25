import { showModal } from './modal.js';

export const addRow = (id) => {
  const input = document.querySelector('.todo-form__input');
  const customSelect = document.querySelector('.todo-form .custom-select');

  const title = input.value;
  const priority = Number(customSelect.getAttribute('data-selected'));

  if (!title || !priority) {
    showModal('모든 항목이 입력되지 않았습니다');
    return;
  }

  const newTodo = {
    id: id,
    title,
    completed: false,
    priority,
  };

  input.value = '';
  customSelect.querySelector('.custom-select__trigger').textContent =
    '중요도 선택';
  customSelect.setAttribute('data-selected', '');

  return newTodo;
};

export const getNextId = (todoList) => {
  return todoList.length ? Math.max(...todoList.map((todo) => todo.id)) + 1 : 1;
};

export const addTodo = (todoList, newTodo) => {
  todoList.push(newTodo);
  return todoList;
};

export const deleteTodos = (todoList, ids) => {
  return todoList.filter((todo) => !ids.includes(todo.id));
};

export const finishTodos = (todoList, ids) => {
  let hasCompleted = todoList.some(
    (todo) => ids.includes(todo.id) && todo.completed
  );
  if (hasCompleted) return null;
  todoList.forEach((todo) => {
    if (ids.includes(todo.id)) todo.completed = true;
  });
  return todoList;
};

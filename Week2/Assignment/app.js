import { todos } from './data/data.js';

const storageKey = 'todos';
let storedData = localStorage.getItem(storageKey);
let todoList;

if (storedData) {
  todoList = JSON.parse(storedData);
} else {
  todoList = todos;
  localStorage.setItem(storageKey, JSON.stringify(todoList));
}

const tbody = document.querySelector('.todo-table__body');

todoList.forEach((todo) => {
  const tr = document.createElement('tr');

  const tdCheckbox = document.createElement('td');
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  tdCheckbox.className = 'todo-table__checkbox';
  tdCheckbox.appendChild(checkbox);

  const tdPriority = document.createElement('td');
  tdPriority.className = 'todo-table__priority';
  tdPriority.textContent = todo.priority;

  const tdCompleted = document.createElement('td');
  tdCompleted.className = 'todo-table__completed';
  tdCompleted.textContent = todo.completed ? 'O' : 'X';

  const tdTitle = document.createElement('td');
  tdTitle.className = 'todo-table__title';
  tdTitle.textContent = todo.title;

  tr.appendChild(tdCheckbox);
  tr.appendChild(tdPriority);
  tr.appendChild(tdCompleted);
  tr.appendChild(tdTitle);

  tbody.appendChild(tr);
});

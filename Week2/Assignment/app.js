import { todos } from './data/data.js';
import { renderList } from './utils/dom.js';
import { getTodos, setTodos } from './utils/storage.js';
import { filterTodos } from './utils/filter.js';
import { addRow } from './utils/row-actions.js';

const storageKey = 'todos';
let todoList = getTodos(storageKey, todos);

renderList(todoList);

const btnAll = document.querySelector('.filter__btn--all');
const btnComplete = document.querySelector('.filter__btn--complete');
const btnIncomplete = document.querySelector('.filter__btn--incomplete');
const selectPriority = document.getElementById('filter-priority');

let currentStatus = 'all';
let currentPriority = '';

const applyFilters = () => {
  const filtered = filterTodos(todoList, currentStatus, currentPriority);
  renderList(filtered);
};

const handleStatusClick = (event) => {
  const clicked = event.target;

  if (clicked === btnComplete) currentStatus = 'complete';
  else if (clicked === btnIncomplete) currentStatus = 'incomplete';
  else currentStatus = 'all';

  applyFilters();
};

const handlePriorityChange = () => {
  currentPriority = Number(selectPriority.value);

  applyFilters();
};

btnAll.addEventListener('click', handleStatusClick);
btnComplete.addEventListener('click', handleStatusClick);
btnIncomplete.addEventListener('click', handleStatusClick);
selectPriority.addEventListener('change', handlePriorityChange);

const getNextId = () => {
  return todoList.length ? Math.max(...todoList.map((todo) => todo.id)) + 1 : 1;
};

const handleRowClick = () => {
  const id = getNextId();
  const newList = addRow(id);

  todoList.push(newList);
  setTodos(storageKey, todoList);

  renderList(todoList);
};

const btnAdd = document.querySelector('.todo-form__btn-add');
btnAdd.addEventListener('click', handleRowClick);

const getCheckedTd = () => {
  const checkboxes = document.querySelectorAll(
    '.todo-table__body input[type="checkbox"]:checked'
  );
  const ids = Array.from(checkboxes).map((checkbox) =>
    Number(checkbox.dataset.id)
  );

  return ids;
};

const deleteRow = () => {
  const ids = getCheckedTd();

  todoList = todoList.filter((todo) => !ids.includes(todo.id));

  setTodos(storageKey, todoList);
  renderList(todoList);
};

const btnDelete = document.querySelector('.btn__actions--delete');
btnDelete.addEventListener('click', deleteRow);

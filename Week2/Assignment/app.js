import { todos } from './data/data.js';
import { createTableRow, renderList } from './utils/dom.js';
import { getTodos, setTodos } from './utils/storage.js';
import { filterTodos } from './utils/filter.js';
import { addRow } from './utils/row-actions.js';

const storageKey = 'todos';
let todoList = getTodos(storageKey, todos);
let id = todoList.length + 1;

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

const handleRowClick = () => {
  const newList = addRow(id);

  todoList.push(newList);
  setTodos(storageKey, todoList);

  renderList(todoList);
};

const btnAdd = document.querySelector('.todo-form__btn-add');
btnAdd.addEventListener('click', handleRowClick);

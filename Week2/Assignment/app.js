import { todos } from './data/data.js';
import { createTableRow, renderList } from './utils/dom.js';
import { getTodos, setTodos } from './utils/storage.js';
import { filterTodos } from './utils/filter.js';

const storageKey = 'todos';
let todoList = getTodos(storageKey, todos);

// 초기 렌더링
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

const handleAddBtnClick = () => {
  const input = document.querySelector('.todo-form__input');
  const selectPriority = document.getElementById('todo-priority');

  const title = input.value;
  const priority = selectPriority.value;

  if (!title || !priority) {
    alert('모든 항목이 채워지지 않았습니다');
    return;
  }

  const newTodo = {
    id: todoList.length + 1,
    title,
    completed: false,
    priority,
  };

  todoList.push(newTodo);
  setTodos(storageKey, todoList);

  renderList(todoList);

  input.value = '';
  selectPriority.value = '';
};

const btnAdd = document.querySelector('.todo-form__btn-add');
btnAdd.addEventListener('click', handleAddBtnClick);

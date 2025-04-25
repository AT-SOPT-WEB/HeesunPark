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

const handleFinish = () => {
  const ids = getCheckedTd();

  if (ids.length === 0) {
    alert('완료 처리할 항목을 선택하세요.');
    return;
  }

  const hasCompleted = todoList.some(
    (todo) => ids.includes(todo.id) && todo.completed
  );

  if (hasCompleted) {
    alert('이미 완료된 항목이 있습니다.');

    return;
  }

  todoList.forEach((todo) => {
    if (ids.includes(todo.id)) {
      todo.completed = true;
    }
  });
  setTodos(storageKey, todoList);
  renderList(todoList);
};

const btnFinish = document.querySelector('.btn__actions--finish');
btnFinish.addEventListener('click', handleFinish);

const thCheckBox = document.querySelector('.todo-table__checkbox');

const getRowCheckboxes = () =>
  document.querySelectorAll('.todo-table__body input[type="checkbox"]');

const handlethCheckBoxClick = (event) => {
  const checked = event.target.checked;
  const checkboxes = getRowCheckboxes();

  thCheckBox.indeterminate = false;

  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
};

const handleRowCheckBoxClick = () => {
  const checkboxes = getRowCheckboxes();
  const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
  const someChecked = Array.from(checkboxes).some((cb) => cb.checked);

  thCheckBox.checked = allChecked;
};

thCheckBox.addEventListener('click', handlethCheckBoxClick);

document.addEventListener('change', (e) => {
  if (e.target.matches('.todo-table__body input[type="checkbox"]')) {
    handleRowCheckBoxClick();
  }
});

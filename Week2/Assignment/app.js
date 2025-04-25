import { todos } from './data/data.js';
import { renderList } from './utils/dom.js';
import { getTodos, setTodos } from './utils/storage.js';
import { filterTodos } from './utils/filter.js';
import {
  getNextId,
  addTodo,
  deleteTodos,
  finishTodos,
} from './utils/row-actions.js';
import { syncHeaderCheckbox, setAllRowCheckboxes } from './utils/checkbox.js';
import { getRowCheckboxes, getCheckedIds } from './utils/dom.js';
import { initCustomSelect } from './utils/selectDropdown.js';
import { addRow } from './utils/row-actions.js';
import { initDragAndDrop } from './utils/drag.js';

document.addEventListener('DOMContentLoaded', () => {
  initCustomSelect();

  // 필터 셀렉트 이벤트 핸들러
  const filterSelect = document.querySelector(
    '.header__btn--container .custom-select'
  );
  if (filterSelect) {
    filterSelect.addEventListener('filterChange', (e) => {
      currentPriority = e.detail.value ? Number(e.detail.value) : '';
      applyFilters();
    });
  }
});

const storageKey = 'todos';
let todoList = getTodos(storageKey, todos);

renderList(todoList);

document.addEventListener('DOMContentLoaded', () => {
  initCustomSelect();

  const filterSelect = document.querySelector('.custom-select--filter');
  if (filterSelect) {
    filterSelect.addEventListener('customFilterChange', (e) => {
      currentPriority = e.detail.value || '';
      applyFilters();
    });
  }

  // 드래그 앤 드롭 초기화
  initDragAndDrop(todoList, renderList, setTodos, storageKey);
});

let currentStatus = 'all';
let currentPriority = '';

const btnAll = document.querySelector('.filter__btn--all');
const btnComplete = document.querySelector('.filter__btn--complete');
const btnIncomplete = document.querySelector('.filter__btn--incomplete');
const btnAdd = document.querySelector('.todo-form__btn-add');
const btnDelete = document.querySelector('.btn__actions--delete');
const btnFinish = document.querySelector('.btn__actions--finish');
const thCheckBox = document.querySelector('.todo-table__checkbox');

const applyFilters = () => {
  const filtered = filterTodos(todoList, currentStatus, currentPriority);
  renderList(filtered);
};

btnAll.addEventListener('click', () => {
  currentStatus = 'all';
  applyFilters();
});
btnComplete.addEventListener('click', () => {
  currentStatus = 'complete';
  applyFilters();
});
btnIncomplete.addEventListener('click', () => {
  currentStatus = 'incomplete';
  applyFilters();
});

btnAdd.addEventListener('click', () => {
  const id = getNextId(todoList);
  const newTodo = addRow(id);
  if (!newTodo) return;
  addTodo(todoList, newTodo);
  setTodos(storageKey, todoList);
  renderList(todoList);
});

btnDelete.addEventListener('click', () => {
  const ids = getCheckedIds();
  todoList = deleteTodos(todoList, ids);
  setTodos(storageKey, todoList);
  renderList(todoList);
});

btnFinish.addEventListener('click', () => {
  const ids = getCheckedIds();
  if (ids.length === 0) {
    alert('완료 처리할 항목을 선택하세요.');
    return;
  }
  const result = finishTodos(todoList, ids);
  if (!result) {
    alert('이미 완료된 항목이 있습니다.');

    // 체크박스 해제
    setAllRowCheckboxes(getRowCheckboxes(), false);
    syncHeaderCheckbox(thCheckBox, getRowCheckboxes());
    return;
  }
  setTodos(storageKey, todoList);
  renderList(todoList);
});

// 헤더 체크박스 클릭 시 전체 체크/해제
thCheckBox.addEventListener('click', (event) => {
  setAllRowCheckboxes(getRowCheckboxes(), event.target.checked);
  syncHeaderCheckbox(thCheckBox, getRowCheckboxes());
});

// 행 체크박스 클릭 시 헤더 체크박스 동기화
document.addEventListener('change', (e) => {
  if (e.target.matches('.todo-table__body input[type="checkbox"]')) {
    syncHeaderCheckbox(thCheckBox, getRowCheckboxes());
  }
});

export const createTableRow = (todo) => {
  const tr = document.createElement('tr');
  tr.draggable = true;
  tr.dataset.id = todo.id;

  const tdCheckbox = document.createElement('td');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.dataset.id = todo.id;
  tdCheckbox.className = 'todo-table__checkbox';
  tdCheckbox.appendChild(checkbox);

  const tdPriority = document.createElement('td');
  tdPriority.className = 'todo-table__priority';
  tdPriority.textContent = todo.priority;

  const tdCompleted = document.createElement('td');
  tdCompleted.className = 'todo-table__completed';
  tdCompleted.textContent = todo.completed ? '⭕' : '❌';

  const tdTitle = document.createElement('td');
  tdTitle.className = 'todo-table__title';
  tdTitle.textContent = todo.title;

  tr.appendChild(tdCheckbox);
  tr.appendChild(tdPriority);
  tr.appendChild(tdCompleted);
  tr.appendChild(tdTitle);

  return tr;
};

export const renderList = (list) => {
  const tbody = document.querySelector('.todo-table__body');
  tbody.innerHTML = '';

  list.forEach((todo) => {
    const row = createTableRow(todo);
    tbody.appendChild(row);
  });
};

export const getRowCheckboxes = () => {
  return document.querySelectorAll('.todo-table__body input[type="checkbox"]');
};

export const getCheckedIds = () => {
  return Array.from(getRowCheckboxes())
    .filter((cb) => cb.checked)
    .map((cb) => Number(cb.dataset.id));
};

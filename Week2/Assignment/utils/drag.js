export const initDragAndDrop = (todoList, renderList, setTodos, storageKey) => {
  const tbody = document.querySelector('.todo-table__body');
  let dragStartIndex;

  tbody.addEventListener('dragstart', (e) => {
    const row = e.target.closest('tr');
    dragStartIndex = [...tbody.children].indexOf(row);
  });

  tbody.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  tbody.addEventListener('drop', (e) => {
    const dropRow = e.target.closest('tr');
    if (!dropRow) return;

    const dragEndIndex = [...tbody.children].indexOf(dropRow);
    if (dragStartIndex === dragEndIndex) return;

    const moved = todoList.splice(dragStartIndex, 1)[0];
    todoList.splice(dragEndIndex, 0, moved);

    setTodos(storageKey, todoList);
    renderList(todoList);
  });
};

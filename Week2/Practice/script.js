const input = document.querySelector('.__todo__input');
const todoList = document.querySelector('.todo__list');
const addBtn = document.querySelector('.add__btn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

const addTodo = (value, id) => {
  const li = document.createElement('li');
  todoList.appendChild(li);
  li.textContent = value;

  if (!todos.some((item) => item.id === id)) {
    todos.push({ text: todoContent, id: id });
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

todos.forEach((item) => {
  addTodo(item.text, item.id);
});

const buttonClick = () => {
  const todoContent = document.querySelector('.todo__input').value;
  const id = Date.now();

  addTodo(todoContent, id);
};

addBtn.addEventListener('click', buttonClick);

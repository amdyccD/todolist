const todoForm = document.querySelector(".todo-form");
const toDoLists = document.querySelector(".toDoLists");
const toDoInput = document.querySelector("input");
const TODOS_KEY = "toDos";
let todos = [];

function addToDoList(newTodos) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    toDoLists.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);
    btn.innerText = "❌";
    span.innerText = newTodos;
    btn.addEventListener("click",removeToDoList);
} 

function removeToDoList(event) {
    const li = event.target.parentElement;
    const span = event.target.previousSibling;
    let index = todos.indexOf(span.innerText);
    todos.splice(index,1);
    handleSaveToDos();
    li.remove();
}

function handleSubmitTodo(event) {
    event.preventDefault();
    let newTodos = toDoInput.value;
    toDoInput.value = "";
    addToDoList(newTodos);
    todos.push(newTodos);
    handleSaveToDos();
}

function handleSaveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

const saveTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos !== null) {
    parsedToDos = JSON.parse(saveTodos);
    todos = parsedToDos;
    parsedToDos.forEach(addToDoList);
}
todoForm.addEventListener("submit",handleSubmitTodo);


handleSaveToDos();


let todos = [];

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Bitte geben Sie einen Todo-Text ein.");
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: todoText,
  };

  todos.push(newTodo);
  todoInput.value = "";
  renderTodoList();
}

function renderTodoList() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.contentEditable = true;
    span.addEventListener("blur", () => {
      todo.text = span.textContent.trim();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Löschen";
    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodoList();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

renderTodoList();


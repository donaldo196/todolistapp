const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
  const newTaskText = newTaskInput.value;
  if (newTaskText) {
    const newTask = document.createElement("li");
    newTask.innerText = newTaskText;
    newTask.addEventListener("click", () => {
      newTask.classList.toggle("completed");
    });
    taskList.appendChild(newTask);
    newTaskInput.value = "";
  }
});

newTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});

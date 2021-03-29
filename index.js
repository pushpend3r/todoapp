let addTaskBtn = document.getElementById("addTaskBtn");
let newTaskDesc = document.getElementById("newTaskDesc");
let tasks = document.getElementById("tasks");

function newTask(value, isCompleted = false) {
  let task = document.createElement("div");
  task.className = "task border rounded p-2 d-flex align-items-center";
  task.innerHTML = `
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="task-id-complete"
                    aria-label="checkbox for whether the task complete or not"
                    ${isCompleted ? "checked" : ""}
                  />

                  <div class="user-select-none taskdesc">
                    ${value}
                  </div>

                  <button
                    type="button"
                    class="btn-close ms-auto"
                    aria-label="delete task"
                  ></button>
`;

  task.querySelector("button.btn-close").addEventListener("click", event => {
    task.remove(task);
    if (!tasks.hasChildNodes()) {
      tasks.classList.remove("border");
      tasks.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });

  tasks.prepend(task);
  if (!tasks.classList.contains("border")) {
    tasks.classList += " border";
    tasks.style.backgroundColor = "#fff";
  }
}

addTaskBtn.addEventListener("click", () => {
  if (newTaskDesc.value === "") alert("Please enter something!!");
  else newTask(newTaskDesc.value);
  newTaskDesc.value = "";
});

document.addEventListener("keypress", event => {
  if (event.code == "Enter" && newTaskDesc.value !== "") {
    newTask(newTaskDesc.value);
    newTaskDesc.value = "";
  }

  if (event.code === "Slash") {
    event.preventDefault();
    newTaskDesc.focus();
  }
});

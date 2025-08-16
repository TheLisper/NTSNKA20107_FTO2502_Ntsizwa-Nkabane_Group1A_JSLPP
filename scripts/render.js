import {openEditModal} from "./modal.js";
/**
 * function to render all tasks on the kanban board
 * clears task containers,updates and renders task elementd in correct containers
 *
 * @param {Array<object>} tasks
 */
export function renderAllTasks(tasks){
    const containers = getTaskContainers();
    clearsContainers(containers);
    updateTaskCounts(tasks);
    renderAllTasks(tasks,containers);
}

/**
 * Retrieves the task containers (Todo, Doing, Done) from the DOM.
 *
 * @returns {Object} An object containing the three task containers.
 * @property {HTMLElement} todo - The container for "Todo" tasks.
 * @property {HTMLElement} doing - The container for "Doing" tasks.
 * @property {HTMLElement} done - The container for "Done" tasks.
 */
function getTaskContainers() {
  return {
    todo: document.getElementById("todo-tasks-container"),
    doing: document.getElementById("doing-tasks-container"),
    done: document.getElementById("done-tasks-container"),
  };

/**
 * Clears the content of the task containers (Todo, Doing, Done).
 *
 * @param {Object} containers - An object containing task containers.
 */
function clearContainers(containers) {
  Object.values(containers).forEach((container) => (container.innerHTML = ""));
}

/**
 * Updates the task counts displayed in the sidebar for each status (Todo, Doing, Done).
 *
 * @param {Array<Object>} tasks - The array of task objects.
 */
function updateTaskCounts(tasks) {
  document.getElementById("num-tasks-todo").textContent = `(${
    tasks.filter((t) => t.status === "todo").length
  })`;
  document.getElementById("num-tasks-doing").textContent = `(${
    tasks.filter((t) => t.status === "doing").length
  })`;
  document.getElementById("num-tasks-done").textContent = `(${
    tasks.filter((t) => t.status === "done").length
  })`;
}

/**
 * Renders each task inside its respective container based on its status.
 * Creates a new task div for each task and appends it to the appropriate container.
 *
 * @param {Array<Object>} tasks - An array of task objects.
 * @param {Object} containers - An object containing the task containers.
 */
function renderTasks(tasks, containers) {
  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.textContent = task.title;

    // Add click event to each task to open the edit modal
    taskDiv.addEventListener("click", () => openEditModal(task, tasks));

    // Find the container for this task's status
    const container = containers[task.status];
    // Add task div to container
    container.append(taskDiv);
  });
}
}

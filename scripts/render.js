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
}
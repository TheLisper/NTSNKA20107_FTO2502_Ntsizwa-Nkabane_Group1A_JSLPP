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


/**
 * Local storage
 * handles all the local storage operations
 * @returns {Array<Task>}
 */
//Loads task from localstorage
export function loadTasks() {
    const jsonString = localStorage.getItem("kanban-tasks");
    return jsonString ? JSON.parse(jsonString): [];
}
 /**
  * Saves an array of tasks to browser's localstorage
  * @param {Array<Task>} tasks - the tasks to save.
  */
 export function saveTasks(tasks){
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks);)
 }
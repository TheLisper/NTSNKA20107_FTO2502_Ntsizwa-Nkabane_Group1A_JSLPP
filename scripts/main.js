//import modules to make main.js functionable
import{initializeTheme, setupThemeToggleButtons} from "./theme.js";
import{fetchTasks} from ".API.js";
import{loadTasks, saveTasks} from "./storage.js";
import{renderAllTasks} from "./render.js";
import{initializeSidebarToggle} from "./sidebar.js";
import{openAddModal} from "./modal.js";

//Load task from the local storage
export let tasks = loadTasks();
async function initialRender() {
    tasks = loadTasks();
    if (tasks.length === 0){
        try{
            tasks = await fetchTasks();
            saveTasks(tasks);
        }catch (error){
            console.error("failed to fetch task:",error);
        }
    }
    renderAllTasks(tasks);
}
//setup theme when page loads
document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    setupThemeToggleButtons();
    document
        .getElementById("desktop-add-task-btn")
        .addEventListener("click", () => openAddModal(tasks));
    initializeSidebarToggle();
    initialRender();
});
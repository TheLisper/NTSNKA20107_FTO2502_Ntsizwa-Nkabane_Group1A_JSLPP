import { saveTasks } from "./storage.js";
import { renderAllTasks } from "./render.js";

let currentTask;
let allTasks;

/* ===============
  Open and Close modals
=============== */

const overlay = document.getElementById("modal-overlay");
const modals = document.querySelectorAll(".modal");

/**
 * Opens a modal by displaying it and the overlay.
 *
 * @param {string} modalId - The ID of the modal to open.
 * This function makes the modal with the specified ID visible and also shows the overlay that covers the rest of the page.
 */
function openModal(modalId) {
  overlay.style.display = "block";
  document.getElementById(modalId).style.display = "block";
}

/**
 * Closes a modal by hiding it and the overlay.
 *
 * @param {string} modalId - The ID of the modal to close.
 * This function hides the modal with the specified ID and also hides the overlay, returning the page to its original state.
 */
function closeModal(modalId) {
  overlay.style.display = "none";
  document.getElementById(modalId).style.display = "none";
}

// Overlay click to close all modals
overlay.addEventListener("click", () => {
  modals.forEach((modal) => {
    closeModal(modal.id);
  });
});


/* ===============
  Open Modals
=============== */

/**
 * Opens the 'Edit Task' modal and fills it with data from the clicked task.
 *
 * @param {Object} task - The task object that contains the task details.
 * @param {Array} tasksArray - The array of all tasks.
 *
 * This function sets the fields in the 'Edit Task' modal to the current task's values.
 * This function also opens the modal to allow the user to edit the task.
 */
export function openEditModal(task, tasksArray) {
  currentTask = task;
  allTasks = tasksArray;

  document.getElementById("edit-title").value = task.title;
  document.getElementById("edit-description").value = task.description;
  document.getElementById("edit-status").value = task.status;

  openModal("edit-task-modal");
}

/**
 * Opens the 'Add New Task' modal.
 *
 * @param {Array} tasksArray - The array of all tasks.
 *
 * This function opens the 'Add Task' modal and allows the user to input data for a new task.
 */
export function openAddModal(tasksArray) {
  allTasks = tasksArray;
  openModal("add-task-modal");
}
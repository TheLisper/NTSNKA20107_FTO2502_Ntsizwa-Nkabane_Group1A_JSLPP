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

/* ===============
  For event listeners
=============== */

// Add New Task
document
  .getElementById("add-new-task-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const newTitle = document.getElementById("add-new-task-title");
    const newDescription = document.getElementById("add-new-task-description");
    const newStatus = document.getElementById("add-new-task-status");

    if (!newTitle.value.trim()) {
      return alert("Please enter a task title.");
    }

    const newTask = {
      id: Date.now(),
      title: newTitle.value.trim(),
      description: newDescription.value.trim(),
      status: newStatus.value,
    };

    allTasks.push(newTask);
    saveTasks(allTasks);
    renderAllTasks(allTasks);

    // Clear form
    newTitle.value = "";
    newDescription.value = "";
    newStatus.value = "todo";

    closeModal("add-task-modal");
  });

/* ===============
  Save Edited Task
=============== */
document
  .getElementById("save-changes-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();

    // Updated current task with values from form
    currentTask.title = document.getElementById("edit-title").value;
    currentTask.description = document.getElementById("edit-description").value;
    currentTask.status = document.getElementById("edit-status").value;

    saveTasks(allTasks); // Save the updated task list
    renderAllTasks(allTasks); // Re-render the updated task list
    closeModal("edit-task-modal");
  });

/* ===============
  Delete Edited Task
=============== */
document
  .getElementById("delete-task-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();

    // Confirm delete
    if (!confirm("Are you sure you want to delete this task?")) {
      return;
    }

    // Remove task from all tasks array
    allTasks = allTasks.filter((task) => task.id !== currentTask.id);

    saveTasks(allTasks); // Save the updated list of tasks
    renderAllTasks(allTasks); // Re-render the updated task list
    closeModal("edit-task-modal");
  });

/* ===============
  Close Buttons
=============== */
document.querySelectorAll(".modal-close-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = button.closest(".modal");
    if (modal) {
      closeModal(modal.id);
    }
  });
});

/* ===============
  Open Mobile Menu
=============== */
document.querySelectorAll(".logo-mobile").forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.preventDefault();
    openModal("mobile-menu-modal");
  });
});

/* ===============
  Close Mobile Menu
=============== */
document
  .getElementById("mobile-modal-close-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    closeModal("mobile-menu-modal");
  });

// This module handles all modal-related functionality for the Kanban app,
// including opening, closing, and populating modals for adding and editing tasks.

/**
 * Opens the overlay modal for adding a new task.
 * Sets the modal display to 'flex' and resets input fields.
 */
export function openAddTaskModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.style.display = "flex";
    // Optionally reset modal fields here
  }
}

/**
 * Closes the overlay modal for adding a new task.
 * Sets the modal display to 'none'.
 */
export function closeAddTaskModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.style.display = "none";
  }
}

/**
 * Populates the modal with task data for editing.
 * @param {Object} task - The task object to edit.
 */
export function populateEditModal(task) {
  // Example: Set modal fields with task data
  document.getElementById("task-title").value = task.title || "";
  document.getElementById("task-desc").value = task.description || "";
  document.getElementById("task-status").value = task.status || "todo";
}

/**
 * Initializes modal event listeners for open/close actions.
 * Should be called once on app startup.
 */
export function initializeModalEvents() {
  // Open modal when add task button is clicked
  const addBtn = document.getElementById("add-new-task-btn");
  if (addBtn) {
    addBtn.addEventListener("click", openAddTaskModal);
  }

  // Close modal when close button is clicked
  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeAddTaskModal);
  }
}

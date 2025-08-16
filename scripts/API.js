//fetches tasks from API
//throws an error if the fetch failed
//load as the api is fetched

/**
 * @typedef {object} task
 * @property {number} id
 * @property {string} board
 * @property {string} title
 * @property {string} description
 * @property {string} status
 * @returns {Promise<Array<task>>}
 */

export async function fetchTasks() {
    const overlay = document.getElementById("loading-overlay");
    overlay.style.display = flex; //show overlay

fetch('https://jsl-kanban-api.vercel.app/') //fetch api
    .then(response => response.json())
    .then(data => {
        //handle data
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        overlay.style.display = "none"; //hide overlay
    });
}
/**
 * Sidebar management
 * handles sidebar functions for mobile, tablet and desktop
 */
export function initializeSidebarToggle() {
    const sidebar = document.getElementById('side-bar-div');
    const hideSidebarBtn = document.getElementById('sidebar-toggle-container');
    const showSidebarBtn = document.getElementById('icon-hide-menu');

    hideSidebarBtn.addEventListener('click', ()=> {
        sidebar.style.display = 'none';
        showSidebarBtn.style.display = 'flex';
    });

    showSidebarBtn.addEventListener('click', ()=> {
        sidebar.style.display = 'flex';
        showSidebarBtn.style.display = 'none';
    });
}
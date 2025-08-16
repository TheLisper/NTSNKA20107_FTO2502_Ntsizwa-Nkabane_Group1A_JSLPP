/**
 * Theme Management
 * handles dark and light mode
 */

//get saved theme from localstorage and load
export function initializeTheme(){
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    applyTheme(isDark);
}

/**
 * @param {boolean} isDark -whether to apply dark theme
 */
function applyTheme(isDark) {
    const body = document.body;
    body.classList.toggle("dark", isDark);

    //show or hide logos based on themes
    const lightLogo = document.getElementById("logo");
    const darkLogo = document.getElementById("dark-logo");
    if (lightLogo){
        lightLogo.style.display = isDark ? "none": "flex";
    }
    if (darkLogo) {
        darkLogo.style.display = isDark ? "flex": "none";
    }

    //Toggle switch circle based on theme
    const switchCircles = document.querySelector(".switch-circle");
    switchCircles.forEach(cicle =>
        circle.classList.toggle("theme-dark-clicked", isDark)
    );
}
// Add click event listeners to toggle buttons
// Toggle theme and save preference
export function setupThemeToggleButtons(){
    const body = document.body;

    const lightLogo = document.getElementById("logo");
    const darkLogo = document.getElementById("dark-logo");

    const switchCircles = document.querySelectorAll(".switch-circle");
    const toogleButtons = document.querySelectorAll(".toggle-theme-btn");

    toogleButtons.forEach(button =>
        button.addEventListener("click", () => {
            //Toggle dark class on body and save
            const isNowDark = body.classList.toggle("dark");
            localStorage.setItem("theme", isNowDark ? "dark" : "light");

            //show or hide logo based on theme
            if (lightLogo){
                darkLogo.style.display = isNowDark? "none" : "flex";
            }
            if (darkLogo){
                darkLogo.style.display = isNowDark ? "flex" : "none";
            }

            //Toggle switch circle position based on theme
            switchCircles.forEach(circle =>
                circle.classList.toggle("theme-dark-clicked", isNowDark)
            );
        })
    );
}
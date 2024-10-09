document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars");
    const toggleStarsButton = document.getElementById("toggleStars");
    const toggleThemeButton = document.getElementById("toggleTheme");
    let starsVisible = true;
    let darkMode = true;

    // Toggle Stars Visibility
    toggleStarsButton.addEventListener("click", function () {
        if (starsVisible) {
            starsContainer.style.display = "none";
            toggleStarsButton.textContent = "Turn On Stars";
        } else {
            starsContainer.style.display = "block";
            toggleStarsButton.textContent = "Turn Off Stars";
        }
        starsVisible = !starsVisible;
    });

    // Toggle Dark/Light Mode
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (darkMode) {
            toggleThemeButton.textContent = "Switch to Dark Mode";
        } else {
            toggleThemeButton.textContent = "Switch to Light Mode";
        }
        darkMode = !darkMode;
    });
});

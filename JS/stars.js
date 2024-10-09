document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById("stars");

    // Function to generate random stars
    function createStars() {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.width = `${Math.random() * 3 + 2}px`;
            star.style.height = star.style.width;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            starsContainer.appendChild(star);
        }
    }

    createStars();
});

document.addEventListener("DOMContentLoaded", () => {
    menu = document.getElementById("mobile-menu");
    btn = document.getElementById("mobile-menu-button");
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});
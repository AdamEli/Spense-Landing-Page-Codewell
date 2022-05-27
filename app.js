const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-hidden");
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("nav-shown");
});

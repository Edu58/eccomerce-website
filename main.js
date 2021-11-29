const bars = document.getElementById("hamburger");
const menu = document.getElementById("link-list");
const closeMenu = document.getElementById("closeMenu")

bars.addEventListener('click', () => {
    menu.classList.toggle("show");
    bars.style.display = "none";
    closeMenu.classList.toggle("close")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
    bars.style.display = "block";
    closeMenu.classList.remove("close")
})
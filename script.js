const darkBtn = document.getElementById("dark");
const body = document.body;

darkBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
});
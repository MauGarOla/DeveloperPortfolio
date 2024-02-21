const btn = document.querySelector(".dark-mode");
const bg = document.querySelector("html");

btn.addEventListener("click",bgColor)

function bgColor() {
    if (bg.style.backgroundColor === "black") {
        bg.style.backgroundColor = "white";
    } else {
        bg.style.backgroundColor = "black";
    }
}


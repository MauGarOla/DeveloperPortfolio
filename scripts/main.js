const btn = document.querySelector(".dark-mode");
const bg = document.querySelector(".background-darkness");

btn.addEventListener("click",bgColor)

function bgColor() {
    if (bg.style.visibility === "hidden") {
        bg.style.visibility = "visible";
    } else {
        bg.style.visibility = "hidden";
    }
}


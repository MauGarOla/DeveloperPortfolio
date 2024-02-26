const btn = document.querySelector(".dark-mode");
const bgh = document.querySelector(".background-darkness.horizontal");
const bgv = document.querySelector(".background-darkness.vertical");

btn.addEventListener("click",bgColor)

function bgColor() {
    if (bgh.style.visibility === "hidden") {
        bgh.style.visibility = "visible";
        bgv.style.visibility = "visible";
    } else {
        bgh.style.visibility = "hidden";
        bgv.style.visibility = "hidden";
    }
}


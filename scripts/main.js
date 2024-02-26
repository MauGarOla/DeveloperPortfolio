const btn = document.querySelector(".dark-mode");
const bgh = document.querySelector(".background-darkness.horizontal");
const bgv = document.querySelector(".background-darkness.vertical");
const boxes = document.querySelectorAll(".dark-hover");

btn.addEventListener("click",bgColor);

function bgColor() {
    if (bgh.style.visibility === "hidden") {
        bgh.style.visibility = "visible";
        bgv.style.visibility = "visible";
        document.documentElement.style.setProperty("--main-color", randomColor())
        document.documentElement.style.setProperty("--second-color", randomColor())
        switchHover()
    } else {
        bgh.style.visibility = "hidden";
        bgv.style.visibility = "hidden";
        document.documentElement.style.setProperty("--main-color", "transparent")
        switchHover()
    }
}

function switchHover() {
    boxes.forEach(function(box) {
        if (box.className.includes("light-hover")) {
            box.classList.replace("light-hover", "dark-hover")
        } else {
            box.classList.replace("dark-hover", "light-hover")
        }
    })   
}   

function random() {
    const x = Math.floor(Math.random() * 256);
    return x;
}

function randomColor() {
    const c = "rgb(" + random() + ", " + random() + ", " + random() + ")";
    return c;
}
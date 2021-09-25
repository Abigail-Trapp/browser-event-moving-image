let boxTop = 200;
let boxLeft = 200;

document.addEventListener("keydown", onKeyPress)

function onKeyPress(event){
    if ("ArrowDown" === event.code){
        boxTop += 10
    }
    if ("ArrowUp" === event.code){
        boxTop -= 10
    }
    document.getElementById("box").style.top = boxTop + "px";
    console.log("You Pressed: " + event.code);
}

document.addEventListener("keydown", logKey)

function logKey(event) {
    if ("ArrowRight" === event.code){
        boxLeft += 10
    }
    if ("ArrowLeft" === event.code){
        boxLeft -= 10
    }
    document.getElementById("box").style.left = boxLeft + "px";
    console.log("You Pressed: " + event.code);
}

let resetTheBox = document.getElementById("resetButton");
document.addEventListener("click", pageReset)

function pageReset(event){
    boxTop = 200
    boxLeft = 200
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
}
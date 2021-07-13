let starticon = document.getElementsByClassName("starticon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

starticon.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-855px"
    }
    else {
        startmenu.style.bottom = "50px"
    }
})
// Capturing Escape key
window.onkeydown = function (event) {
    if (event.keyCode == 27) {
        if (startmenu.style.bottom == "50px") {
            startmenu.style.bottom = "-855px"
        }
    }
}

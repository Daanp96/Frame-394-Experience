const overlay = document.getElementById("js--overlay");

function start() {
    overlay.style.zIndex = "1";
    overlay.style.opacity = "1";
    setTimeout(function(){window.location.href = "computerOpstarten.html"}, 3000)
}
const viewDiscr = document.getElementById("js--viewDiscr");
const viewDiscrBg = document.getElementById("js--viewDiscr-bg");
const continueButton = document.getElementById("js--continue");
const overlay = document.getElementById("js--overlay");

function playVideo() {
    viewDiscr.style.animation = "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    viewDiscrBg.style.opacity = "0";
    setTimeout(function(){viewDiscrBg.style.display = "none";}, 1000);
    setTimeout(function(){
        continueButton.style.display = "block";
        continueButton.style.animation = "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 60000);
}

function skipVideo() {
    overlay.style.zIndex = "10"
    overlay.style.opacity = "1";
    setTimeout(function(){window.location.href = "volgende webpagina"}, 3000);
}
const checkbox1 = document.getElementById("js--checkbox-1");
const checkbox2 = document.getElementById("js--checkbox-2");
const checkbox3 = document.getElementById("js--checkbox-3");
const choice1 = document.getElementById("js--choice-1")
const choice2 = document.getElementById("js--choice-2")
const choice3 = document.getElementById("js--choice-3")
const continueButton = document.getElementById("js--continueButton");

choice1.addEventListener('click', function(){
    checkbox1.checked = true;
    checkbox2.checked = false;
    checkbox3.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
});

choice2.addEventListener('click', function(){
    checkbox2.checked = true;
    checkbox1.checked = false;
    checkbox3.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
});

choice3.addEventListener('click', function(){
    checkbox3.checked = true;
    checkbox1.checked = false;
    checkbox2.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
});


const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 1500);
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
}

function nextPage() {
    overlay.style.opacity = "1";
    overlay.style.zIndex = "10";
    setTimeout(function(){window.location.href = "Frames-doorlopen.html";}, 2000);
}
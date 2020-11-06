const checkbox1 = document.getElementById("js--checkbox-1");
const checkbox2 = document.getElementById("js--checkbox-2");
const checkbox3 = document.getElementById("js--checkbox-3");
const continueButton = document.getElementById("js--continueButton");

checkbox1.addEventListener('change', function(){
    checkbox2.checked = false;
    checkbox3.checked = false;
    if (checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false) {
        continueButton.style.opacity = "0";
        continueButton.style.pointerEvents = "none";
    } else {
        continueButton.style.opacity = "1";
        continueButton.style.pointerEvents = "all";
    }
});

checkbox2.addEventListener('change', function(){
    checkbox1.checked = false;
    checkbox3.checked = false;
    if (checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false) {
        continueButton.style.opacity = "0";
        continueButton.style.pointerEvents = "none";
    } else {
        continueButton.style.opacity = "1";
        continueButton.style.pointerEvents = "all";
    }
});

checkbox3.addEventListener('change', function(){
    checkbox1.checked = false;
    checkbox2.checked = false;
    if (checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false) {
        continueButton.style.opacity = "0";
        continueButton.style.pointerEvents = "none";
    } else {
        continueButton.style.opacity = "1";
        continueButton.style.pointerEvents = "all";
    }
});

const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 1500);
}

function nextPage() {
    overlay.style.opacity = "1";
    overlay.style.zIndex = "10";
    setTimeout(function(){window.location.href = "result.html";}, 2000);
}
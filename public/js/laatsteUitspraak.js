const choices = document.getElementById("js--choices");
const checkbox1 = document.getElementById("js--checkbox-1");
const checkbox2 = document.getElementById("js--checkbox-2");
const checkbox3 = document.getElementById("js--checkbox-3");
const continueButton = document.getElementById("js--continueButton");
const newspaper = document.getElementById("js--newspaper");
const newspaperWrapper = document.getElementById("js--newspaper-wrapper");
const newspaperTitle = document.getElementById("js--newspaper-title");
const newspaperArticle = document.getElementById("js--newspaper-article");
let choice;

checkbox1.addEventListener('change', function(){
    checkbox2.checked = false;
    checkbox3.checked = false;
    if (checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false) {
        continueButton.style.opacity = "0";
        continueButton.style.pointerEvents = "none";
    } else {
        continueButton.style.opacity = "1";
        continueButton.style.pointerEvents = "all";
        choice = 1;
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
        choice = 2;
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
        choice = 3;
    }
});

const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 1500);
}

function result() {
    if (choice == 2) {
        newspaperTitle.innerHTML = "Michael Slager walks away a free man";
        newspaperArticle.innerHTML = "Today, December 7, new information has been revealed from the incident with Walter Scott. U.S. District Judge David C. Norton hasn't sentenced officer Michael Slager to 20 years in prison. Although defense attorneys had argued for manslaughter, the judge agreed with prosecutors that the 'appropriate underlying offense' was voluntary manslaughter. An appeal for increase of sentence has been denied, meaning Slager walks away a free man.";
    }
    else if (choice == 3) {
        newspaperTitle.innerHTML = "Michael Slager sentenced to 20 years";
        newspaperArticle.innerHTML = 'Today, December 7, new information has been revealed about the incident with Walter Scott. U.S. District Judge David C. Norton sentenced officer Michael Slager to 20 years in prison for second-degree murder. Although defendse attorneys had argued for voluntary manslaughter, the judge agreed with prosecutors that the "appropriate underlying offense" was second-degree murder. An appeal for reduction of sentence has been denied.';
    }
    choices.style.pointerEvents = "none";
    continueButton.style.display = "none";
    newspaperWrapper.style.display = "flex";
}
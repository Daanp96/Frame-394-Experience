const gif = document.getElementById("js--gif");
let titleReddit = document.getElementById("js--title_post");
const button = document.getElementById("js--next-page");
const viewDiscr = document.getElementById("js--viewDiscr");
const viewDiscrBg = document.getElementById("js--viewDiscr-bg");

function respond(n){
    let p = document.getElementById("js--respond-"+n);
    let form = document.getElementById("js--form-"+n);
    form.style.display='block';
    
}

function enableComment(n){
    let input = document.getElementById("input-comment-"+n).value;
    let result = document.getElementById("result-"+n);
    let form = document.getElementById("js--form-"+n);
    

    if (input.length < 1) {
        result.textContent = 'Your answer is empty';
    } else {
        result.style.display = "block";
        result.textContent = "VideoAnalyser420: " + input;
    }
    form.style.display = "none";
}



function changeColor(n){
    let m = document.getElementById("js--like-button-"+n);
    if (m.getAttribute('src') == "./img/heart-grey.png"){
        m.src = "./img/heart-red.png";
    }else{
        m.src = "./img/heart-grey.png";
    }
}

function getTitle(){
    let title = localStorage.getItem("postTitle");
    titleReddit.innerHTML = title;
}

getTitle();


function readComments() {
    viewDiscr.style.display = "none";
    viewDiscrBg.style.display = "none";
}

function Continue(){
    window.location.href = "tweedeUitspraak.html"
}
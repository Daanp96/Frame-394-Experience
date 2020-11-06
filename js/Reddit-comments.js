const gif = document.getElementById("js--gif");
let titleReddit = document.getElementById("js--title_post");

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
        result.textContent = "VideoAnalyser420: " + input;
    }
    form.style.display = "none";
}



function changeColor(n){
    let m = document.getElementById("js--like-button-"+n);
    if (m.getAttribute('src') == "/img/heart-grey.png"){
        m.src = "/img/heart-red.png";
    }else{
        m.src = "/img/heart-grey.png";
    }
}

function getTitle(){
    let title = localStorage.getItem("postTitle");
    titleReddit.innerHTML = title;
}

getTitle();


//gif_file.addEventListener("click", (e) => {
//    gif.style.display = "block";
//  });
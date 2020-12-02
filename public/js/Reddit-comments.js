const gif = document.getElementById("js--gif");
let titleReddit = document.getElementById("js--title_post");
const button = document.getElementById("js--next-page");

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.reddit_comments = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));
console.log(visited);

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

function Continue(){
    window.location.href = "tweedeUitspraak.html"
}

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
const overlay = document.getElementById("js--overlay");
let counter = 0;

hamburger.addEventListener("click", () => {
    counter++;
    if(counter % 2){
        navigation.style.opacity = 1;
        navi_text.style.opacity = 0;
        overlay.style.zIndex = 1;
        overlay.style.opacity = 0.8;
        setTimeout(() => {
            navigation.style.display = "block";
        });
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
        }, 1000);
    }

    for(let i = 0; i < list_items.length; i++){
        if(list_items[i].dataset.visited === "false"){
            list_items[i].style.color = "grey";
        }
    }
});
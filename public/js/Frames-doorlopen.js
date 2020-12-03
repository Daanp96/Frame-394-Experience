//document.addEventListener("DOMContentLoaded", function(event) { 
    //maak de door en terug knop aan
  const prev = document.getElementById("js--prev");
  const next = document.getElementById("js--next");
  const button = document.getElementById("js--end-button");
  const taser = document.getElementById("js--taser");
  const taserText = document.getElementById("js--taser-text");
  const frameNumber = document.getElementById("js--frame-number")
  const framePic = document.getElementById("js--frame-picture")
  const popupBg = document.getElementById("js--popup-bg");
  const popup = document.getElementById("js--popup");
  let frame = 392;

  function readComments() { 
    popupBg.style.display = "none";
    popup.style.display = "none";
  }
  
  // maak de terugknop klikbaar
  prev.addEventListener("click", function(){
    // showPreviousSlide(1);
    frame -= 1;
    if (frame < 392) {
      frame = 406;
    }
    if (frame == 394) {
      taser.style.display = "block";
    } else {taser.style.display = "none";}
    frameNumber.innerHTML = "Frame #" + frame;
    framePic.setAttribute("src", "./webp/frame-" + frame + ".webp")
    taserText.style.display = "none";
  });

  // maak de doorknop klikbaaar
  next.addEventListener("click", function(){
    // showNextSlides(1);
    prev.style.display = "block";
    frame += 1;
    if (frame > 406) {
      frame = 392;
    }
    frameNumber.innerHTML = "Frame #" + frame;
    framePic.setAttribute("src", "./webp/frame-" + frame + ".webp")
    if (frame == 394) {
      taser.style.display = "block";
    } else {taser.style.display = "none";}
    if (frame == 406) {
      button.style.display = "flex";
    }
    taserText.style.display = "none";
  });

  //maakt de taser in frame 394 klikbaar
  taser.addEventListener("click", function(){
    taserText.style.display = "block";
  })

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.frames = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));

const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 2500);

    for(const it in visited){
      if (visited[it] == false){
          list_items[page].style.color = "grey";
          list_items[page].style.cursor = "default";
          list_links[page].removeAttribute("href");
      }
      page++;
  }
}

function nextPage() {
  overlay.style.opacity = "1";
  overlay.style.zIndex = "10";
  setTimeout(function(){window.location.href = "3DMain.html";}, 3000);
}

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_links = document.getElementsByClassName("navigation__items__link");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
let counter = 0;
let page = 0;

hamburger.addEventListener("click", () => {
    counter++;
    if(counter % 2){
        navigation.style.opacity = 1;
        navi_text.style.opacity = 0;
        overlay.style.zIndex = 1;
        overlay.style.opacity = 0.8;
        setTimeout(() => {
            navigation.style.display = "block";
        }, 1000);
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        hamburger.style.pointerEvents = "none";
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
            hamburger.style.pointerEvents = "auto";
        }, 1000);
    }
});
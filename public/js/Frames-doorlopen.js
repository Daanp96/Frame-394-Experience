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
  const frameText = document.getElementById("js--frame_text");
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
    frameText.innerHTML = "Frame #" + frame;
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
    frameText.innerHTML = "Frame #" + frame;
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
          list_items[page].style.textDecoration = "none";
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
      navigation.style.display = "block";
      navi_text.style.opacity = 0;
      overlay.style.zIndex = 1;
      overlay.style.opacity = 0.8;
      setTimeout(() => {
          navigation.style.opacity = 1;
      }, 100);
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

const modal = document.getElementById("js--modal");
const modalBg = document.getElementById("js--modal-bg");
let modalOpen = false;

function resetWarning(){
    modalBg.style.display = "block";
    modal.style.display = "flex";
    modalBg.style.opacity = ".5";
    modal.style.opacity = "1";
    modalOpen = true;
}

function hideModal() {
    modalBg.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(function(){
        modalBg.style.display = "none";
        modal.style.display = "none";
    }, 1000);
    modalOpen = false;
}

function backToStart(){
    document.location.href = "index.html";
}

window.addEventListener("orientationchange", function(event) {
  if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
      modal.style.display = "none";
  } else if(modalOpen == true) {
    modal.style.display = "flex";
}
});
document.addEventListener("DOMContentLoaded", function(event) { 
    //maak de door en terug knop aan
  const prev = document.getElementById("js--prev");
  const next = document.getElementById("js--next");
  const button = document.getElementById("js--end-button");
  
  const visited = JSON.parse(localStorage.getItem("visited_pages"));
  visited.frames = true;
  localStorage.setItem('visited_pages', JSON.stringify(visited));
  console.log(visited);


  // maak de terugknop klikbaar
  prev.addEventListener("click", function(){
    showPreviousSlide(1);
  });

  // maak de doorknop klikbaaar
  next.addEventListener("click", function(){
    showNextSlides(1);
  });

  

  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let l = (n - 1);
    let m = (n + 1);
    let z = (slides.length - 1)
    if (n > 13) {
     button.style.display = "flex";
    }
    if( n < slides.length){
      slides[n].style.display = 'block';
      slides[l].style.display = "none";
      slides[m].style.display = "none";
      slides[z].style.display = "none";
    } else{
      reset(); 
    }
      
    }

  

  
  let slideIndex = 0;
  showSlides(slideIndex);

  
// De doorknop zegt toon dia(1 terug)
  function showPreviousSlide(n){
    slideIndex = slideIndex - n;
    showSlidesReversed(slideIndex);
    
    
  }

  // De doorknop zegt toon dia(1 verder dan nu)
  function showNextSlides(n) {
    slideIndex = slideIndex + n;
    showSlides(slideIndex);
  
  }

  function showSlidesReversed(n){
    let slides = document.getElementsByClassName("mySlides");
    let l = (n -1);
    let m = (n + 1);
    let z = (0)
    
    //var dots = document.getElementsByClassName("dot");
    if( n < 0){
      reset2(); 
    } else{
      slides[n].style.display = 'block';
      slides[m].style.display = "none";
     // slides[z].style.display = "none";
      
    }    
  }

  function reset(){
    slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");
    let z = (slides.length - 1)
    slides[z].style.display = 'none';
    showSlides(slideIndex);
    
  }

  function reset2(){
    let slides = document.getElementsByClassName("mySlides");
    let z = 0;
    slides[z].style.display = 'none';
    slideIndex = (slides.length -1);
    showSlidesReversed(slideIndex);
  }

});

const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 2500);
}

function nextPage() {
  overlay.style.opacity = "1";
  overlay.style.zIndex = "10";
  setTimeout(function(){window.location.href = "3DMain.html";}, 3000);
}

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
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
        }, 1000);
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
            list_items[i].style.cursor = "default";
        }
    }
});
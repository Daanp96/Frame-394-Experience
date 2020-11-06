document.addEventListener("DOMContentLoaded", function(event) { 
    //maak de door en terug knop aan
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const button = document.getElementById("end-button");
  



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
  setTimeout(function(){window.location.href = "3D analyse";}, 3000);
}
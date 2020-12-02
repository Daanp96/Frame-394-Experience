document.addEventListener("DOMContentLoaded", function(event) { 
    //maak de door en terug knop aan
  const prev = document.getElementById("js--prev");
  const next = document.getElementById("js--next");
  const button = document.getElementById("js--end-button");
  const taser = document.getElementById("js--taser");
  



  // maak de terugknop klikbaar
  prev.addEventListener("click", function(){
    showPreviousSlide(1);
  });

  // maak de doorknop klikbaaar
  next.addEventListener("click", function(){
    showNextSlides(1);
  });

  //maakt de taser in frame 394 klikbaar
  taser.addEventListener("click", function(){
    showBorder();
  })

  function showSlides(n) {
      let slides = document.getElementsByClassName("mySlides");
      let l = (n - 1);                                      // dit maakt een variable aan die het getal heeft van n -1. Als je de array ziet als een slideshow is dit dus de vorige slide.
      let m = (n + 1);                                      // dit maakt een variable aan die het getal heeft van n +1. Als je van rechts naar links door de array heen zou gaan, dan zou dit in de array de vorige slide zijn.
      let z = (slides.length - 1)                           // dit maakt een variabele aan voor de laatste slide in de array. er zijn 14 slides in de array, tellen begint bij 0 dus de index van de veertiende slide is nummer 13.
      if (n > 13) {                                         
       button.style.display = "flex";                     // toon knop als je bij de laatste index van de array bent.
      }
      if( n < slides.length){                             //zo lang als we in de array zitten
        slides[n].style.display = 'block';                // toon de foto van de huidige index 
        slides[l].style.display = "none";                 // haal de foto van index -1  weg
        slides[m].style.display = "none";                 // haal de foto van index +1 weg
        slides[z].style.display = "none";                 // haal de laatste foto van de array weg
      } else{
        reset();                                           //roep een reset aan en begin weer op het begin
      }  
    }

  

  
  let slideIndex = 0;                             
  showSlides(slideIndex);                         //begin met de functie van het tonen van slides en begin daarmee op de eerste slide.

  
// De vorigeknop zegt toon dia(1 terug)
  function showPreviousSlide(n){
    slideIndex = slideIndex - n;
    showSlidesReversed(slideIndex);
  }

  // De volgendeknop zegt toon dia(1 verder dan nu)
  function showNextSlides(n) {
    slideIndex = slideIndex + n;
    showSlides(slideIndex);
  }

  function showSlidesReversed(n){
    let slides = document.getElementsByClassName("mySlides");               
    let m = (n + 1);

    if( n < 0){
      reset2();               //roep een reset aan en begin op de laatste slide.
    } else{
      slides[n].style.display = 'block';            //toon de huidige slide
      slides[m].style.display = "none";             // stop met het tonen van slide +1
    }    
  }

  function reset(){
    slideIndex = 0;                           // variabele met het getal voor de index van de eerste slide
    let slides = document.getElementsByClassName("mySlides");
    let z = (slides.length - 1)             //variabele voor het getal voor de index van de laatste slide.
    slides[z].style.display = 'none';       // hou  op met tonen foto laatste slide
    showSlides(slideIndex);                 //begin met tonen slides bij de allereerste slide.
  }

  function reset2(){
    let slides = document.getElementsByClassName("mySlides");
    let z = 0;                                //variabele voor het getal van de index van de eerste slide
    slides[z].style.display = 'none';         // hou met tonen eerste slide.
    slideIndex = (slides.length -1);        // variabele voor de index van de laatste slide.
    showSlidesReversed(slideIndex);       // begin met het tonen van slides en begin met de allerlaatste.
  }

  function showBorder(){
    let higlight = document.getElementsByClassName("clickable-object");
    for (let i = 0; i < higlight.length; i++) {
      const square =   higlight[i];
      square.style.opacity = "1";                   //stop de onzichtbaarheid van de highlight van de taser.
    }
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
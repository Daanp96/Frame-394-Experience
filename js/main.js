console.log("Hello world");

document.addEventListener("DOMContentLoaded", function(event) { 
    //maak de door en terug knop aan
  console.log("doc loaded");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  



  // maak de terugknop klikbaar
  prev.addEventListener("click", function(){
    console.log("test click event prev");   
    showPreviousSlide(1);
  });

  // maak de doorknop klikbaaar
  next.addEventListener("click", function(){
    console.log("test click event next");
    showNextSlides(1);
  });

  

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    //var dots = document.getElementsByClassName("dot");
    console.log("in function showSLides")
    if( n < slides.length){
      slides[n].style.display = 'block';
      slides[n-1].style.display = "none";
      slides[n+1].style.display = "none";
    } else{
      reset(); 
    }
      
    }

  

  
  let slideIndex = 0;
  showSlides(slideIndex);

  function reset(){
    slideIndex = 0;
    showSlides(slideIndex);
    console.log("in reset function");
    slides[(slideIndex.length-1)].style.display = 'none';
  }



  // De doorknop zegt toon dia(1 verder dan nu)
  function showNextSlides(n) {
    slideIndex = slideIndex + n;
    console.log(slideIndex);
    showSlides(slideIndex);
  
  }

  function showSlidesReversed(n){
  const slides = document.getElementsByClassName("mySlides");
    //var dots = document.getElementsByClassName("dot");
    console.log("in function showSLidesReversed");
    if( n < 0){
      slideIndex = (slides.length-1);
      showSlides(slideIndex);
      //slides[n+1].style.display = "none";
    } else{
      
    }
      
  }

  function reset2(){
    const slides = document.getElementsByClassName("mySlides");
    slideIndex = (slides.length -1);
    console.log(slideIndex);
    showSlides(slideIndex);
  }

  
  function showPreviousSlide(n){
    const slides = document.getElementsByClassName("mySlides");
    slideIndex = slideIndex - n;
    console.log(slideIndex);
    if (slideIndex < 0) {
      slides[0].style.display = 'none';
      reset2();
    } else {
      showSlides(slideIndex);
    }
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

 




















  
  
 
});

console.log("Hello world");

document.addEventListener("DOMContentLoaded", function(event) { 
    //maak de door en terug knop aan
  console.log("doc loaded");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  



  // maak de terugknop klikbaar
  prev.addEventListener("click", function(){
    console.log("test click event prev");   
    showPreviousSlide(-1)
  });

  // maak de doorknop klikbaaar
  next.addEventListener("click", function(){
    console.log("test click event next");
    showNextSlides(1);
  });

  

  function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("mySlides");
    //var dots = document.getElementsByClassName("dot");
    console.log("in function showSLides")
    for (var i=0;i<slides.length;i+=1){
      slides[n].style.display = 'block';
      slides[n-1].style.display = "none";
    }    

  }


  let slideIndex = 1;
  showSlides(slideIndex);


  // De doorknop zegt toon dia(1 verder dan nu)
  function showNextSlides(n) {
    slideIndex = slideIndex + n;
    console.log(slideIndex);
    showSlides(slideIndex);
   // if (slideIndex > slides.length) {
   //   n = 0;
   // }
  }





  
  function showPreviousSlide(n){
    showSlides(slideIndex - n)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

 




















  
  
 
});

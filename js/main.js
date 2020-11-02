console.log("Hello world");

document.addEventListener("DOMContentLoaded", function(event) { 
    //maak de door en terug knop aan
  console.log("doc loaded");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  



  // maak de terugknop klikbaar
  prev.addEventListener("click", function(){
    console.log("test click event prev");   
    showNextSlides(-1);
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
    if(n < slides.length){
      slides[n].style.display = 'block';
      slides[n-1].style.display = "none";
    } else{
      reset()
    }
    console.log(n);
    if (n < 0) {
      slides[slides.length].style.display = 'block';
    }
    
    
    //for (i=0;i<slides.length;i+=1){
    //  slides[n].style.display = 'block';
    //  slides[n-1].style.display = "none";
    //} 
    
    //for (let i = 0; i > slides.length; i++) {
    //  slides[0].style.display = 'block';
    //  slides[n].style.display = 'none';
//
//    //  console.log("nested for statement test");
    //  }
      
    }

  

  
  let slideIndex = 0;
  showSlides(slideIndex);

  function reset(){
    slideIndex = 0;
    showSlides(slideIndex);
  }



  // De doorknop zegt toon dia(1 verder dan nu)
  function showNextSlides(n) {
    slideIndex = slideIndex + n;
    console.log(slideIndex);
    showSlides(slideIndex);
    if (slideIndex < 0) {
      slideIndex = slides.length;
    }
    
   // if (slideIndex > slides.length) {
   //   n = 0;
   // }
  }





  
  function showPreviousSlide(n){
    showSlides(slideIndex - n)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

 




















  
  
 
});

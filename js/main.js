console.log("Hello world");

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
  console.log("doc loaded");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");


  prev.addEventListener("click", function(){
    console.log("test click event prev");   
    showPreviousSlide()
  });
  next.addEventListener("click", function(){
    console.log("test click event next")
  });

  //Create an array of the images
  


  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  
  

  function showNextSlide(){
    showSlides(slideIndex -= n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log("in function showSLides")
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    
  }
  let slideIndex = 1;
  showSlides(slideIndex);
 
});

console.log("Hello world");

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work

  document.getElementsByClassName("prev").addEventListener("click", showSlides);
  const next = getElementsByClassName("next");

  document.addEventListener

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  let slides = document.getElementsByClassName("mySlides");
  

  function showNextSlide(){

  }

  function showSlides(n) {
    var i;
    
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
});

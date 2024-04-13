document.getElementById('slideshow').addEventListener('click', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = document.querySelector('.slide.active');
    var currentIndex = Array.from(slides).indexOf(currentSlide);
    var nextIndex = (currentIndex + 1) % slides.length;
  
    currentSlide.classList.remove('active');
    slides[nextIndex].classList.add('active');
  });
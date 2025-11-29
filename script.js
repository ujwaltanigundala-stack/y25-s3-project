
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const numImages = images.length;
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % numImages;
        slides.style.transform = `translateX(-${currentIndex * (100 / numImages)}%)`;
    }

    setInterval(showNextImage, 3000); 
});
function explodeAndRedirect(el, url) {
  el.classList.add('explode');
  setTimeout(() => {
    window.location.href = url;
  }, 6000); // Match the animation duration
}
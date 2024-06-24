    let slideIndex = 0;
        const slides = document.querySelectorAll('#slideshow .bgimage');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
        }
        
        function changeSlide(direction) {
            slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
            showSlide(slideIndex);
        }
        
        // Initialize the slideshow
        showSlide(slideIndex);

        // JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

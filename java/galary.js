let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(0)";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0}
    slides[slideIndex].style.transform = "translateX(-100%)";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

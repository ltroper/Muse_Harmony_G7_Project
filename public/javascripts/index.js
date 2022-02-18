/* Slideshow */
let slideIndex = 1;
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

showSlides(slideIndex);

const previous = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");
console.log(previous);
console.log(next);

previous[0].addEventListener("click", () => {
  plusSlides(-1);
});
next[0].addEventListener("click", () => {
  plusSlides(1);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

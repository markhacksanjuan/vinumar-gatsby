import React from 'react'
import './slider.css'

const Slider = () => {
    let slideIndex = 1
let slideIndex2 = 1

const showSlides = (n) => {
  const slides = document.getElementsByClassName("mySlides")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  
  slides[slideIndex-1].style.display = "block"
}
const showSlides2 = (n) => {
  const slides = document.getElementsByClassName('mySlides2')
  if(slides.length !== 0){
    if(n > slides.length) {slideIndex2 = 1}
    if(n < 1) {slideIndex2 = slides.length}
    for(i = 0; i < slides.length; i++){
      slides[i].style.display = 'none'
    }
    slides[slideIndex2 - 1].style.display = 'block'
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
const plusSlides2 = (n) => {
  showSlides2(slideIndex2 += n)
}

showSlides2(slideIndex2)
showSlides(slideIndex)



}
export default Slider
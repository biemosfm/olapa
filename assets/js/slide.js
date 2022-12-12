currentSlideID = 1
sliderElement = document.getElementById('slider')
totalSlides = sliderElement.childElementCount
console.log(totalSlides)

function next() {
  if (currentSlideID < totalSlides) {
    currentSlideID++
    showSlide()
  }
}

function prev() {
  if (currentSlideID > 2) {
    currentSlideID--
    showSlide()
  }
}

function showSlide() {
  slides = document.getElementById('slider').getElementsByClassName('li')
  for (let i = 0; i < totalSlides; i++) {
    const element = slides[i]
    if (currentSlideID === i + 1) {
      element.classList.remove('hidden')
    } else {
      element.classList.add('hidden')
    }
  }
}

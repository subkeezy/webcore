const techList = document.querySelector('.tech__list')
const techMoreButton = document.querySelector('.tech__more-button')
const techLessButton = document.querySelector('.tech__less-button')

function techOpenList() {
  techList.classList.add('tech__list--hidden')
  techLessButton.classList.add('tech__less-button--hidden')

  techMoreButton.addEventListener('click', function () {
    techList.classList.remove('tech__list--hidden')
    techMoreButton.classList.add('tech__more-button--hidden')
    techLessButton.classList.remove('tech__less-button--hidden')
  })
}

techOpenList()

function techCloseList() {
  techLessButton.addEventListener('click', function () {
    techList.classList.add('tech__list--hidden')
    techLessButton.classList.add('tech__less-button--hidden')
    techMoreButton.classList.remove('tech__more-button--hidden')
  })
}

techCloseList()

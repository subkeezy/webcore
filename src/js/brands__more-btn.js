const brandsList = document.querySelector('.brands__list')
const brandsMoreButton = document.querySelector('.brands__more-button')
const brandsLessButton = document.querySelector('.brands__less-button')

function brandsOpenList() {
  brandsList.classList.add('brands__list--hidden')
  brandsLessButton.classList.add('brands__less-button--hidden')

  brandsMoreButton.addEventListener('click', function () {
    brandsList.classList.remove('brands__list--hidden')
    brandsMoreButton.classList.add('brands__more-button--hidden')
    brandsLessButton.classList.remove('brands__less-button--hidden')
  })
}

brandsOpenList()

function brandsCloseList() {
  brandsLessButton.addEventListener('click', function () {
    brandsList.classList.add('brands__list--hidden')
    brandsLessButton.classList.add('brands__less-button--hidden')
    brandsMoreButton.classList.remove('brands__more-button--hidden')
  })
}

brandsCloseList()

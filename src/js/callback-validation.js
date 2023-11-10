function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('callback__input-box--error')) {
      parent.querySelector('.callback__label--error').remove()
      parent.classList.remove('callback__input-box--error')
      input.style.cssText = "border: 1px solid #EAEAEA";
    }
  }
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('callback__label')

    errorLabel.classList.add('callback__label--error');
    errorLabel.textContent = text;

    parent.classList.add('callback__input-box--error')

    parent.append(errorLabel)

    input.style.cssText = "border: 1px solid red";


  }


  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

    removeError(input)
    if (input.value == '') {
      removeError(input)
      createError(input, 'Поле не заполнено!')
      result = false;
    }
  }

  return result
}

document.getElementById('callback__form').addEventListener('submit', function(event) {
  event.preventDefault()

  if (validation(this)==true) {
      alert('Форма проверена успешно!')

  }
})

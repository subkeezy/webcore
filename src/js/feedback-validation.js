const feedbackName = document.querySelector('.feedback__form-name');
const feedbackTel = document.querySelector('.feedback__form-tel')
const feedbackEmail = document.querySelector('.feedback__form-email')
const feedbackMessage = document.querySelector('.feedback__form-message');
const feedbackSendBtn = document.querySelector('.feedback__button');
const feedbackForm = document.querySelector('.feedback__form');

let message = document.createElement('p');

// function nameValidation () {
//   feedbackSendBtn.addEventListener('click', function (e) {
//     e.preventDefault()
//     removeError ()
//     if (feedbackName.value.length === 0) {
//       message.classList.add('feedback__validation-message');
//       message.textContent = 'Это обязательное поле!';
//       feedbackForm.insertBefore(message, feedbackTel);
//       feedbackName.style.cssText = 'outline: 1px solid red';
//     }
//   })
// }

// nameValidation ()

function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('feedback__input-box--error')) {
      parent.querySelector('.feedback__label--error').remove()
      parent.classList.remove('feedback__input-box--error')
      input.style.cssText = "border: 1px solid #EAEAEA";
    }
  }
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('feedback__label')

    errorLabel.classList.add('feedback__label--error');
    errorLabel.textContent = text;

    parent.classList.add('feedback__input-box--error')

    parent.append(errorLabel)

    input.style.cssText = "border: 1px solid red";


  }


  let result = true;

  const allInputs = form.querySelectorAll('input');
  const textarea = form.querySelector('textarea');

  for (const input of allInputs) {

    removeError(input)
    if (input.value == '') {
      removeError(input)
      createError(input, 'Поле не заполнено!')
      result = false;
    }
    if (input.dataset.at) {
      removeError(input)
      if (input.value.includes("@")) {

      } else {
        createError(input, `Неправильный E-mail!`)
        result = false;
      }
    }
  }

  removeError(textarea)
  if (textarea.value == '') {
    removeError(textarea)
    createError(textarea, 'Поле не заполнено!')
    result = false;
  }



  return result
}

document.getElementById('feedback__form').addEventListener('submit', function(event) {
  event.preventDefault()

  if (validation(this)==true) {
      alert('Форма проверена успешно!')

  }
})

// document.getElementById('callback__form').addEventListener('submit', function(event) {
//   event.preventDefault()

//   if (validation(this)==true) {
//       alert('Форма проверена успешно!')

//   }
// })



// function removeError () {
//   if (feedbackName.contains(message)) {
//     message.remove();
//   }
// }

// function validation(form) {

//   function removeError(input) {
//     const parent = input.parentNode;

//     if (parent.classList.contains('error')) {
//       parent.querySelector('.error-label').remove()
//       parent.classList.remove('error')
//     }
//   }
//   function createError(input, text) {
//     const parent = input.parentNode;
//     const errorLabel = document.createElement('label')

//     errorLabel.classList.add('error-label');
//     errorLabel.textContent = text;

//     parent.classList.add('error')

//     parent.append(errorLabel)


//   }


//   let result = true;

//   const allInputs = form.querySelectorAll('input');

//   for (const input of allInputs) {

//     removeError(input)
//     if (input.value == '') {
//       removeError(input)
//       createError(input, 'Поле не заполнено!')
//       result = false;
//     }
//     if (input.dataset.minLength) {
//       removeError(input)
//       if (input.value.length < input.dataset.minLength) {
//         createError(input, `Пароль должен быть не меньше ${input.dataset.minLength} символов!`)
//         result = false;
//       }
//     }
//     if (input.dataset.at) {
//       removeError(input)
//       if (input.value.includes("@")) {

//       } else {
//         createError(input, `Неправильный E-mail!`)
//         result = false;
//       }
//     }
//   }

//   return result
// }

// document.getElementById('add-form').addEventListener('submit', function(event) {
//   event.preventDefault()

//   if (validation(this)==true) {
//       // alert('Форма проверена успешно!')
//       myMove()
//   }
// })

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClear = document.querySelector('[data-deleteAll]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement =  document.querySelector('[data-current-operand]');

let nextNumber = false;

allClear.addEventListener('click', () => {
  currentOperandTextElement.innerHTML = "";
  previousOperandTextElement.innerHTML = "";
})

deleteButton.addEventListener('click', () => {
  currentOperandTextElement.innerHTML = "";
})

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentOperandTextElement.innerHTML = button.innerHTML;
    previousOperandTextElement.innerHTML = button.innerHTML;
  })
  nextNumber = true;
})


operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentOperandTextElement.innerHTML += button.innerText;
    previousOperandTextElement.innerHTML += button.innerHTML;
  })
})

if (nextNumber === true) {
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentOperandTextElement.innerHTML = previousOperandTextElement.innerHTML + button.innerHTM;
    })
  })
}


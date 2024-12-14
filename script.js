const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = 'Error';
      }
    } else if (value === 'C') {
      currentInput = '';
    } 
	else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
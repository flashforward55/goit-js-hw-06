const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
	counterValue -= 1;
	counterValueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
	counterValue += 1;
	counterValueSpan.textContent = counterValue;
});

const input = document.querySelector('#controls input');
const createButton = document.querySelector('#controls [data-create]');
const destroyButton = document.querySelector('#controls [data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
	let width = 30;
	let height = 30;

	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement('div');

		box.style.width = `${width}px`;
		box.style.height = `${height}px`;
		box.style.backgroundColor = getRandomHexColor();

		boxes.appendChild(box);

		width += 10;
		height += 10;
	}
}

function destroyBoxes() {
	boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
	const amount = input.value;

	createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

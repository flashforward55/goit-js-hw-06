const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', e => {
	const expectedLength = Number(validationInput.dataset.length);
	const actualLength = e.currentTarget.value.length;

	if (actualLength === expectedLength) {
		validationInput.classList.remove('invalid');
		validationInput.classList.add('valid');
	} else {
		validationInput.classList.remove('valid');
		validationInput.classList.add('invalid');
	}
});

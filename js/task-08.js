const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
	e.preventDefault();
	const {
		elements: { email, password },
	} = e.currentTarget;

	if (email.value === '' || password.value === '') {
		return alert('Please fill in all the fields!');
	}

	const formData = {
		email: email.value,
		password: password.value,
	};

	console.log(formData);
	e.currentTarget.reset();
});

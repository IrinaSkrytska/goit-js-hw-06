const form = document.querySelector('.login-form');
const emailInput = form.firstElementChild;
const passwordInput = emailInput.nextElementSibling;



const onFormSubmit = (event) => {
	event.preventDefault();
const {
		elements: {
			email: { value: email },
			password: { value: password },
		},
	} = event.currentTarget;

	!email || !password
		? alert('Пожалуйста, заполните ВСЕ поля')
		: console.log({ email: password });

	loginFormRef.reset();
};

form.addEventListener('submit', onFormSubmit);
const authForm = document.querySelector('.auth__form');

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');


authForm.addEventListener('submit', () => {
	localStorage.setItem('name', inputName.value);
	localStorage.setItem('email', inputEmail.value);
});
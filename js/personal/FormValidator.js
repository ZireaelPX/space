class FormValidator {
	constructor(selectors, form) {
		this._inputSelector = selectors.inputSelector;
		this._submitButtonSelector = selectors.submitButtonSelector;
		this._inactiveButtonClass = selectors.inactiveButtonClass;
		this._inputErrorClass = selectors.inputErrorClass;
		this._errorClass = selectors.errorClass;
		this._form = form;

		this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
		this._buttonSubmit = this._form.querySelector(this._submitButtonSelector);
	}

	// Проверка валидности input
	_checkInputValidity(input) {
		this._errorElement = this._form.querySelector(`#${input.id}-error`);
		if (!input.validity.valid) {
			input.classList.add(this._inputErrorClass);
			this._errorElement.classList.add(this._errorClass);
			this._errorElement.textContent = input.validationMessage;
		} else {
			input.classList.remove(this._inputErrorClass);
			this._errorElement.classList.remove(this._errorClass);
			this._errorElement.textContent = '';
		}
	}

	// Добавление событий
	_setEventListeners() {
		this._inputList.forEach((input) => {
			input.addEventListener('input', () => {
				this._checkInputValidity(input);
				this.toggleButtonState();
			});
		});
	}

	toggleButtonState() {
		if (!this._form.checkValidity()) {
			this._buttonSubmit.classList.add(this._inactiveButtonClass);
			this._buttonSubmit.setAttribute('disabled', true);
		} else {
			this._buttonSubmit.classList.remove(this._inactiveButtonClass);
			this._buttonSubmit.removeAttribute('disabled', false);
		}
	}

	// Функция для сброса ошибок
	resetErrors() {
		console.log(this._inputList);
		this._inputList.forEach((input) => {
			this._errorElement = this._form.querySelector(`#${input.id}-error`);
			input.classList.remove(this._inputErrorClass);
			this._errorElement.classList.remove(this._errorClass);
			this._errorElement.textContent = '';
			// this._checkInputValidity(input);
		});
	}

	enableValidation() {
		this._setEventListeners();
	}
}

export { FormValidator };
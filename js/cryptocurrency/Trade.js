class Trade {
	constructor(buyForm, sellForm, currency, updateStorage) {
		this._buyForm = buyForm;
		this._sellForm = sellForm;
		this._currency = currency;
		this._updateStorage = updateStorage;
		console.log(this._buyForm.elements);
	}

	setEventListeners() {
		this._buyForm.addEventListener('submit', (evt) => {
			evt.preventDefault();

			const input = +this._buyForm.elements.buy.value;

			if (localStorage.getItem(this._currency)) {
				const newValue = +localStorage.getItem(this._currency) + input;
				localStorage.setItem(this._currency, newValue);
			} else {
				localStorage.setItem(this._currency, input);
			}
			this._clearValues(this._buyForm);

			this._updateStorage();
		});
		this._sellForm.addEventListener('submit', (evt) => {
			evt.preventDefault();

			const input = +this._sellForm.elements.sell.value;

			if (localStorage.getItem(this._currency)) {

				if (+localStorage.getItem(this._currency) >= input) {
					const newValue = +localStorage.getItem(this._currency) - input;
					localStorage.setItem(this._currency, newValue);
					this._clearValues(this._sellForm);
					this._updateStorage();
				} else {
					this._sellForm.elements.sell.value = 'Ошибка!';
				}
			} else {
				localStorage.setItem(this._currency, input);
			}

		});
	}

	_clearValues(form) {
		form.reset();
	}

}

export { Trade };
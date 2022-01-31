class Api {
	constructor() {

	}
	_checkResponse(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Ошибка: ${res.status}`);
	}


	getBTCprice() {
		return fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
			.then(this._checkResponse);
	}
	getETHprice() {
		return fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT")
			.then(this._checkResponse);
	}
	getSOLprice() {
		return fetch("https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT")
			.then(this._checkResponse);
	}
	getXRPprice() {
		return fetch("https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT")
			.then(this._checkResponse);
	}

	getDOTprice() {
		return fetch("https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT")
			.then(this._checkResponse);
	}

	// getData() {
	// 	return Promise.all([this.getBTCprice()]);
	// }

}

const textBtcPrice = document.querySelectorAll('.market__btc-price span');
const linkBtcPrice = document.querySelector('.price-btc');
const linkEthPrice = document.querySelector('.price-eth');
const linkSolPrice = document.querySelector('.price-sol');
const linkXrpPrice = document.querySelector('.price-xrp');
const linkDotPrice = document.querySelector('.price-dot');

const api = new Api();

const toggleColorPrice = (span, price) => {
	if (+span.textContent < price) {
		span.classList.add('_green');
		span.classList.remove('_red');
	} else {
		span.classList.add('_red');
		span.classList.remove('_green');
	}
};

const repeatBtcPrice = () => {
	api.getBTCprice().then((data) => {
		console.log(data);


		const price = data.price;

		toggleColorPrice(linkBtcPrice, +price);

		if (textBtcPrice) {
			textBtcPrice.forEach((item) => {
				item.textContent = +price;
			});
		}

		linkBtcPrice.textContent = +price;
	});
};
repeatBtcPrice();


const repeatETHPrice = () => {
	api.getETHprice().then((data) => {
		console.log(data);
		const price = data.price;

		toggleColorPrice(linkEthPrice, +price);



		// textBtcPrice.forEach((item) => {
		// 	item.textContent = +price;
		// });
		linkEthPrice.textContent = +price;
	});
};
repeatETHPrice();

const repeatSOLPrice = () => {
	api.getSOLprice().then((data) => {
		console.log(data);
		const price = data.price;

		toggleColorPrice(linkSolPrice, +price);
		// textBtcPrice.forEach((item) => {
		// 	item.textContent = +price;
		// });
		linkSolPrice.textContent = +price;
	});
};
repeatSOLPrice();

const repeatXRPPrice = () => {
	api.getXRPprice().then((data) => {
		console.log(data);
		const price = data.price;

		toggleColorPrice(linkXrpPrice, +price);

		// textBtcPrice.forEach((item) => {
		// 	item.textContent = +price;
		// });
		linkXrpPrice.textContent = +price;
	});
};
repeatXRPPrice();

const repeatDOTPrice = () => {
	api.getDOTprice().then((data) => {
		console.log(data);
		const price = data.price;

		toggleColorPrice(linkDotPrice, +price);

		// textBtcPrice.forEach((item) => {
		// 	item.textContent = +price;
		// });
		linkDotPrice.textContent = +price;
	});
};
repeatDOTPrice();

setInterval(() => {
	repeatBtcPrice();
	repeatETHPrice();
	repeatSOLPrice();
	repeatXRPPrice();
	repeatDOTPrice();
}, 10000);
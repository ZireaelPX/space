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

	// getData() {
	// 	return Promise.all([this.getBTCprice()]);
	// }

}

const textBtcPrice = document.querySelector('.market__btc-price');
const api = new Api();

const repeatBtcPrice = () => {
	api.getBTCprice().then((data) => {
		console.log(data);
		const price = data.price;
		textBtcPrice.textContent = +price;
	});
};
repeatBtcPrice();
// api.getBTCprice().then((data) => {
// 	console.log(data);
// 	const price = data.price;
// 	textBtcPrice.textContent = +price;

// 	// setInterval(() => {
// 	// 	textBtcPrice.textContent = +price;
// 	// }, 1000);
// });

setInterval(() => {
	repeatBtcPrice();
}, 10000);
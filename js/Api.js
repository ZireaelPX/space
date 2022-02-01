export default class Api {
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

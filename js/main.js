import Api from './Api.js';


window.addEventListener('DOMContentLoaded', () => {


	const api = new Api();

	const btc = document.querySelector('.card_price_btc');
	const eth = document.querySelector('.card_price_eth');
	const sol = document.querySelector('.card_price_sol');
	const xrp = document.querySelector('.card_price_xrp');

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

			const price = data.price;

			toggleColorPrice(btc, +price);

			btc.textContent = +price;
		});
	};


	const repeatETHPrice = () => {
		api.getETHprice().then((data) => {
			const price = data.price;

			toggleColorPrice(eth, +price);

			eth.textContent = +price;
		});
	};

	const repeatSOLPrice = () => {
		api.getSOLprice().then((data) => {
			const price = data.price;

			toggleColorPrice(sol, +price);

			sol.textContent = +price;
		});
	};

	const repeatXRPPrice = () => {
		api.getXRPprice().then((data) => {
			const price = data.price;

			toggleColorPrice(xrp, +price);

			xrp.textContent = +price;
		});
	};

	repeatBtcPrice();
	repeatETHPrice();
	repeatSOLPrice();
	repeatXRPPrice();


});


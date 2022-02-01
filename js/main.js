import Api from './Api.js';

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
repeatBtcPrice();


const repeatETHPrice = () => {
	api.getETHprice().then((data) => {
		const price = data.price;

		toggleColorPrice(eth, +price);

		eth.textContent = +price;
	});
};
repeatETHPrice();

const repeatSOLPrice = () => {
	api.getSOLprice().then((data) => {
		const price = data.price;

		toggleColorPrice(sol, +price);

		sol.textContent = +price;
	});
};
repeatSOLPrice();

const repeatXRPPrice = () => {
	api.getXRPprice().then((data) => {
		const price = data.price;

		toggleColorPrice(xrp, +price);

		xrp.textContent = +price;
	});
};
repeatXRPPrice();


setInterval(() => {
	repeatBtcPrice();
	repeatETHPrice();
	repeatSOLPrice();
	repeatXRPPrice();
}, 1000);
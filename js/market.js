import Api from './Api.js';
const textBtcPrice = document.querySelectorAll('.market__btc-price span');
const textEthPrice = document.querySelectorAll('.market__eth-price span');
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
		const price = data.price;

		toggleColorPrice(linkEthPrice, +price);

		if (textEthPrice) {
			textEthPrice.forEach((item) => {
				item.textContent = +price;
			});
		}

		// textBtcPrice.forEach((item) => {
		// 	item.textContent = +price;
		// });
		linkEthPrice.textContent = +price;
	});
};
repeatETHPrice();

const repeatSOLPrice = () => {
	api.getSOLprice().then((data) => {
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
}, 1000);
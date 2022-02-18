import { Trade } from "./Trade.js";

const marketFormBuy = document.querySelector('.market__form_buy');
const marketFormSell = document.querySelector('.market__form_sell');
const marketStorage = document.querySelectorAll('.market__storage span');

const updateStorage = () => {
	marketStorage.forEach(item => {
		item.textContent = localStorage.getItem('XRP') || '0';
	});
};

const tradeBtc = new Trade(marketFormBuy, marketFormSell, 'XRP', updateStorage);
tradeBtc.setEventListeners();


updateStorage();
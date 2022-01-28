import { openImagePopup } from "./personal.js";

class Card {
	constructor(data, templateSelector) {
		this._name = data.name;
		this._link = data.link;
		this._templateSelector = templateSelector;

		// В конструкторе не получается получить значение
		// this._cardTitle = this._element.querySelector('.place__title');


		// Вот такую оишбку выводит в консоли
		// 	Card.js:9 Uncaught TypeError: Cannot read properties of undefined (reading 'querySelector')
		//     at new Card (Card.js:9)
		//     at createCard (index.js:131)
		//     at index.js:160
		//     at Array.forEach (<anonymous>)
		//     at index.js:160

		// Создал их в generateCard(), если так можно сделать
	}
	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content
			.querySelector('.place')
			.cloneNode(true);

		return cardElement;
	}
	_setEventListeners() {
		this._cardLikeBtn.addEventListener('click', () => this._handleLikeClick());

		this._cardDeleteBtn.addEventListener('click', () => this._handleDeleteClick());

		this._cardImage.addEventListener('click', () => openImagePopup(this));
	}
	_handleLikeClick() {
		this._cardLikeBtn.classList.toggle('place__like-btn_active');
	}
	_handleDeleteClick() {
		this._element.remove();
	}
	generateCard() {
		this._element = this._getTemplate();

		this._cardTitle = this._element.querySelector('.place__title');
		this._cardImage = this._element.querySelector('.place__image');
		this._cardDeleteBtn = this._element.querySelector('.place__delete-btn');
		this._cardLikeBtn = this._element.querySelector('.place__like-btn');

		this._cardTitle.textContent = this._name;
		this._cardImage.src = this._link;
		this._cardImage.alt = this._name;

		this._setEventListeners();

		return this._element;
	}
}

export { Card };
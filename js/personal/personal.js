import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
	{
		name: 'Биткоин',
		link: 'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80'
	},
	{
		name: 'Ethereum',
		link: 'https://images.unsplash.com/photo-1622632169740-85c306c57aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'
	},
	{
		name: 'XRP',
		link: 'https://images.unsplash.com/photo-1628238289092-b94f5c5b9375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
	},
	{
		name: 'Dogecoin',
		link: 'https://images.unsplash.com/photo-1622450373817-1fc9608c31f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
	},
	{
		name: 'Ton coin',
		link: 'https://www.clublaura.com/wp-content/uploads/2018/05/shutterstock_795545785.jpg'
	},
	{
		name: 'Solana',
		link: 'https://cryptonew.ru/uploads/posts/2021-01/1609665451_solana-sol-coin-1.png'
	}
];



const selectorsValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit-btn',
	inactiveButtonClass: 'popup__submit-btn_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};


const popups = document.querySelectorAll('.popup');

const placesBlock = document.querySelector('.places__block');

const popupCloseBtns = document.querySelectorAll('.popup__close-btn');

const popupAvatarEdit = document.querySelector('.popup_avatar-edit');
const popupInputValueAvatarLink = document.querySelector('.popup__input_value_avatar-link');

const profileAvatar = document.querySelector('.profile__avatar');
const popupProfileEdit = document.querySelector('.popup_profile-edit');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileEditAvatar = document.querySelector('.profile__avatar-btn');

const popupProfileAdd = document.querySelector('.popup_card-add');
const profileAddBtn = document.querySelector('.profile__add-btn');

const popupCaption = document.querySelector('.popup__caption');
const popupImage = document.querySelector('.popup__image');
const popupImgShow = document.querySelector('.popup_img-show');

const popupInputValueName = document.querySelector('.popup__input_value_name');
const popupInputValueHobby = document.querySelector('.popup__input_value_hobby');
const popupInputValueCardName = document.querySelector('.popup__input_value_card-name');
const popupInputValueCardLink = document.querySelector('.popup__input_value_card-link');

const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupEditForm = document.querySelector('.popup__form_name_edit');
const popupAddForm = document.querySelector('.popup__form_name_add');
const popupAvatarForm = document.querySelector('.popup__form_name_avatar-edit');

// const forms = document.querySelectorAll('.popup__form');
// Для классов
const openImagePopup = (data) => {
	popupCaption.textContent = data._name;
	popupImage.alt = data._name;
	popupImage.src = data._link;
	openPopup(popupImgShow);
};
// Для классов


const openPopup = (popup) => {
	document.addEventListener('keydown', handlerEscapeClosePopup);
	popup.classList.add('popup_opened');
};
const closePopup = (popup) => {
	document.removeEventListener('keydown', handlerEscapeClosePopup);
	popup.classList.remove('popup_opened');
};

// Открытие edit popup
const openEditPopup = () => {
	popupInputValueName.value = profileName.textContent;
	popupInputValueHobby.value = profileSubtitle.textContent;
	formEditValid.toggleButtonState();
	openPopup(popupProfileEdit);
};
// Открытие Add popup
const openAddPopup = () => {
	formAddValid.toggleButtonState();
	openPopup(popupProfileAdd);
};
// Открытие Avatar popup
const openAvatarPopup = () => {
	// formAddValid.toggleButtonState();
	formAvatarValid.toggleButtonState();
	openPopup(popupAvatarEdit);
};

const updateProfile = () => {
	profileName.textContent = localStorage.getItem('name');
	profileSubtitle.textContent = localStorage.getItem('email');
};
updateProfile();

// Отправка edit popup
const handlerFormEditSubmit = (evt) => {
	evt.preventDefault();

	profileName.textContent = popupInputValueName.value;
	profileSubtitle.textContent = popupInputValueHobby.value;

	localStorage.setItem('name', popupInputValueName.value);
	localStorage.setItem('email', popupInputValueHobby.value);

	closePopup(popupProfileEdit);
	updateProfile();
};

window.addEventListener('storage', () => {
	updateProfile();
});
// Отправка add popup
const updateInitialCards = () => {
	localStorage.setItem('crypto', JSON.stringify(initialCards));
};

if (!localStorage.getItem('crypto')) {
	updateInitialCards();
}

const handlerFormAddSubmit = (evt) => {
	evt.preventDefault();
	const cardData = {
		name: popupInputValueCardName.value,
		link: popupInputValueCardLink.value,
	};

	const obj = JSON.parse(localStorage.getItem('crypto'));

	obj.push(cardData);

	localStorage.setItem('crypto', JSON.stringify(obj));

	createCard(cardData);
	closePopup(popupProfileAdd);

	popupAddForm.reset();
};

const renderCard = (container, data) => {
	container.prepend(data);
};

const createCard = (data) => {
	const card = new Card(data, '#card');
	const cardElement = card.generateCard();
	renderCard(placesBlock, cardElement);
};

const updateCruptoObj = () => {
	const obj = JSON.parse(localStorage.getItem('crypto'));
	obj.forEach(item => createCard(item));
};
updateCruptoObj();


// Закрывает все модальные окна
popupCloseBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		const popup = item.closest('.popup');
		closePopup(popup);
	});
});
// Закрывает popup при нажатии на клавишу Escape
const handlerEscapeClosePopup = (evt) => {
	const popup = document.querySelector('.popup_opened');// т.к всего один popup имеет этот класс на странице
	if (evt.key === "Escape") {
		closePopup(popup);
	}
};
// При клике на оверлей закрывает popup
popups.forEach(item => {
	item.addEventListener('click', (evt) => {
		if (evt.target === evt.currentTarget) {
			closePopup(evt.currentTarget);
		}
	});
});

// Отправка исходных данных для составления карточек


// Открытие модальных окон

profileEditBtn.addEventListener('click', () => {
	popupEditForm.reset();
	formEditValid.resetErrors();
	openEditPopup();
});
profileAddBtn.addEventListener('click', () => {
	popupAddForm.reset();
	formAvatarValid.resetErrors();

	openAddPopup();
});

profileEditAvatar.addEventListener('click', () => {
	popupAvatarForm.reset();
	formEditValid.resetErrors();
	openAvatarPopup();
});




const updateAvatar = () => {
	const getLink = localStorage.getItem('linkAvatar');

	profileAvatar.src = getLink;
};

if (localStorage.getItem('linkAvatar')) {
	updateAvatar();
}

const handleFormUpdateAvatar = (evt) => {
	evt.preventDefault();

	const linkAvatar = popupInputValueAvatarLink.value;

	localStorage.setItem('linkAvatar', linkAvatar);

	updateAvatar(localStorage.getItem('linkAvatar'));

	closePopup(popupAvatarEdit);

	popupAvatarForm.reset();
};

// Отправка данных с форм
popupEditForm.addEventListener('submit', handlerFormEditSubmit);
popupAddForm.addEventListener('submit', handlerFormAddSubmit);
popupAvatarForm.addEventListener('submit', handleFormUpdateAvatar);

const formEditValid = new FormValidator(selectorsValidation, popupEditForm);
const formAddValid = new FormValidator(selectorsValidation, popupAddForm);
const formAvatarValid = new FormValidator(selectorsValidation, popupAvatarForm);

formEditValid.enableValidation();
formAddValid.enableValidation();
formAvatarValid.enableValidation();

export { openImagePopup };
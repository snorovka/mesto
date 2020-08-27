//массив карточек
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: './images/cards__dombay.png'
  }
];

console.log(initialCards);

//контейнер массива карточек
const initialCardsContainer = document.querySelector(".cards");

//добавление карточек в контейнер
const addCardToContainer = (cardItem) => {
  const cardElement = document.querySelector("#cardTemplate").content.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = cardItem.name;
  cardElement.querySelector(".card__image").src = cardItem.link;

  initialCardsContainer.append(cardElement);
}


initialCards.forEach(addCardToContainer);



//переменная всплывающего окна popup
let popup = document.querySelector('.popup');

//переменные и константы кнопок
let popupEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let popupSaveButton = popup.querySelector('.popup__save');

const popupAddButton = popup.querySelector('.profile__add-button');

//переменная формы
let popupForm = document.querySelector('#profile-edit');

//переменные полей profile
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

//переменные полей ввода popup
let inputName = document.querySelector('#name');
let inputJob = document.querySelector('#job');


//переменные полей карточки card
const cardName = document.querySelector('#card-name');
const cardLink = document.querySelector('#card-link');


//открытие - закрытие popup
const popupToggle = function () {
  popup.classList.toggle('popup_opened');
}
popupCloseButton.addEventListener ('click', popupToggle);

//редактирование полей profile по кнопке "редактировать"
const popupOpen = function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupToggle();
}
popupEditButton.addEventListener ('click', popupOpen);

//сохранение полей profile по кнопке "сохранить"
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupToggle();
}
popupForm.addEventListener ('submit', formSubmitHandler);


//добавление карточки card по кнопке "+"
//popupAddButton.addEventListener ('click', popupToggle);

//function formSubmitHandler (evt) {
  //evt.preventDefault();
  //profileName.textContent = inputName.value;
  //profileJob.textContent = inputJob.value;
  //popupToggle();
//}
//popupForm.addEventListener('submit', formSubmitHandler);

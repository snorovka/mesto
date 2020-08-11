//переменная всплывающего окна popup
let popup = document.querySelector('.popup');

//переменные кнопок
let popupEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let popupSaveButton = popup.querySelector('.popup__save');

//переменные полей profile
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

//массив полей ввода popup
let inputs = document.querySelectorAll('input');

//открытие - закрытие popup
const popupToggle = function (event) {
  popup.classList.toggle('popup_opened');
}
popupCloseButton.addEventListener ('click', popupToggle);

//редактирование полей profile по кнопке "редактировать"
const popupOpen = function (e) {
  inputs[0].value = profileName.textContent;
  inputs[1].value = profileJob.textContent;
  popupToggle();
}
popupEditButton.addEventListener ('click', popupOpen);

//сохранение полей profile по кнопке "сохранить"
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputs[0].value;
  profileJob.textContent = inputs[1].value;
  popupToggle();
}
popupSaveButton.addEventListener('click', formSubmitHandler);

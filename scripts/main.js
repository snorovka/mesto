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

//редактирование полей profile по кнопке "редактировать"
const popupOpen = function (e) {
  e.preventDefault();
  inputs[0].value = profileName.textContent;
  inputs[1].value = profileJob.textContent;
  popup.classList.toggle('popup_opened');
}
popupEditButton.addEventListener ('click', popupOpen);

//открытие - закрытие popup
const popupToggle = function (event) {
  event.preventDefault();
  popup.classList.toggle('popup_opened');
}
popupCloseButton.addEventListener ('click', popupToggle);

//сохранение полей profile по кнопке "сохранить"
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputs[0].value;
    profileJob.textContent = inputs[1].value;
    popup.classList.toggle('popup_opened');
}
popupSaveButton.addEventListener('click', formSubmitHandler);

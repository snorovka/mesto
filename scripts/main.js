//переменная всплывающего окна popup
let popup = document.querySelector('.popup');

//переменные кнопок
let popupEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let popupSaveButton = popup.querySelector('.popup__save');

//переменная формы
let popupForm = document.querySelector('#profile-edit');

//переменные полей profile
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

//переменные полей ввода popup
let inputName = document.querySelector('#name');
let inputJob = document.querySelector('#job');

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
popupForm.addEventListener('submit', formSubmitHandler);

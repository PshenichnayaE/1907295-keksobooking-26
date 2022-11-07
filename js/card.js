const offerTypeToTitle = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом ',
  'bungalow': 'Бунгало',
  'hotel': 'Отель'
};

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

function getCardElement({offer, author}) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = offerTypeToTitle[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  const popupDescriptionElement = cardElement.querySelector('.popup__description');
  popupDescriptionElement.textContent = offer.description;
  if (offer.description && offer.description.length === 0) {
    popupDescriptionElement.classList.add('.visually-hidden');
  }

  const popupFeaturesElement = cardElement.querySelector('.popup__features');
  popupFeaturesElement.innerHTML = '';

  offer.features.forEach((item) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature');
    featureElement.classList.add(`popup__feature--${item}`);

    popupFeaturesElement.appendChild(featureElement);
  });

  const popupPhotosElement = cardElement.querySelector('.popup__photos');
  popupPhotosElement.innerHTML = '';

  offer.photos.forEach((photo) => {
    const photoElement = cardTemplate.querySelector('.popup__photo').cloneNode(true);
    photoElement.src = photo;

    popupPhotosElement.appendChild(photoElement);
  });

  return cardElement;
}

export {getCardElement};

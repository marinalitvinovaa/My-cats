class Card {
  constructor(dataCat, selectorTemplate) {
    this._data = dataCat;
    this._selectorTemplate = selectorTemplate;
  }

  _getTemplate(){
    return document.querySelector(this._selectorTemplate).content.querySelector('.card');
  }

  getElement(){
    this.element = this._getTemplate().cloneNode(true);
    const cardTitle = this.element.querySelector('.card__title');
    const cardImage = this.element.querySelector('.card__photo');
    const cardLike = this.element.querySelector('.card__like');
    //const cardRate = this.element.querySelector('.rate');

    if (!this._data.favourite) {
      cardLike.remove()
    }

    if (!this._data.name) {
      this.element.remove()
    }




    cardTitle.textContent = this._data.name;
    cardImage.src = this._data.img_link || `${'https://coolsen.ru/wp-content/uploads/2021/10/141-20211027_200131.jpg'}`;
    

    return this.element
  }
}





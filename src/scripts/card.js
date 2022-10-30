class Card {
  constructor(dataCat, selectorTemplate, handleCatTitle, handleCatImage) {
    this._data = dataCat;
    this._handleCatTitle = handleCatTitle;
    this._handleCatImage = handleCatImage;
    this._selectorTemplate = selectorTemplate;
    
  }

  _getTemplate(){
    return document.querySelector(this._selectorTemplate).content.querySelector('.card');
  }

  _updateViewLike() {
    if (this._data.favourite) {
      this.cardLike.classList.add('card__like_active')
    } else {
      this.cardLike.classList.remove('card__like_active')
    }
  }

  getElement(){
    this.element = this._getTemplate().cloneNode(true);
    this.cardTitle = this.element.querySelector('.card__title');
    this.cardImage = this.element.querySelector('.card__photo');
    this.cardLike = this.element.querySelector('.card__like');
    const cardRate = this.element.querySelector('.rate');

    if (!this._data.favourite) {
      this.cardLike.remove()
    }
    this._updateViewLike()

    if (typeof this._data.id === 'undefined') {
        let test = this._data;
      test.name = 'Локи';
      test.id = 123;
      test.img_link = 'https://ferma-biz.ru/wp-content/uploads/2022/08/1476173418-111-2.jpg'
        console.log(test);
    }

    this.updateView();


    this.setEventListener();
    return this.element
  }

  getData() {
    return this._data;
  }

  getId(){
    return this._data.id;
  }

  setData(newData) {
    this._data = newData;
  }

  updateView(){
    this.cardTitle.textContent = this._data.name;
    this.cardImage.src = this._data.img_link || `${'https://coolsen.ru/wp-content/uploads/2021/10/141-20211027_200131.jpg'}`;
  }

  deleteView(){
    this.element.remove();
    this.element = null;
  }

  setEventListener() {
    this.cardTitle.addEventListener('click', () => this._handleCatTitle(this))
    this.cardImage.addEventListener('click', () => this._handleCatImage(this._data))
  }
}





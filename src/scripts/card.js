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

   console.log(this._data);

    if (typeof this._data.id === 'undefined') {
        let test = this._data;
      test.name = 'Локи';
      test.id = 123;
      test.img_link = 'https://ferma-biz.ru/wp-content/uploads/2022/08/1476173418-111-2.jpg'
        console.log(test);
    }




    cardTitle.textContent = this._data.name;
    cardImage.src = this._data.img_link || `${'https://coolsen.ru/wp-content/uploads/2021/10/141-20211027_200131.jpg'}`;
    

    return this.element
  }
}





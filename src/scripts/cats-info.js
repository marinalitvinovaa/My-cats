class CatsInfo{
  constructor(selectorTemplate, handleEditCatInfo, handleLikeCat, handleDeleteCat) {
    this._selectorTemplate = selectorTemplate;
    this._handleEditCatInfo = handleEditCatInfo;
    this._handleLikeCat = handleLikeCat;
    this._handleDeliteCat = handleDeleteCat;
    this._data = {};
  }

  setData(cardInstance) {
    this._cardInstance = cardInstance;
    this._data = this._cardInstance.getData();



    this.catImage.src = this._data.img_link|| `${'https://coolsen.ru/wp-content/uploads/2021/10/141-20211027_200131.jpg'}`;;
    this.catAbout.textContent = this._data.description;
    this.catTitle.textContent = this._data.name;
    this.catAge.textContent = this._data.age || 'Неопереден';
    this.catId.textContent = `Порядковый номер: ${this._data.id}`


    this.catRate.innerHTML = generateRate(this._data.rate)
    console.log(this._data);
  }

  _getTemplate() {
    return document.querySelector(this._selectorTemplate).content.children[0];
  }


  getElement() {
    this.element = this._getTemplate().cloneNode(true);

    this.buttonEdited = this.element.querySelector('.cat-info__edited');
    this.buttonSaved = this.element.querySelector('.cat-info__saved');
    this.buttonLiked = this.element.querySelector('.card__like');
    this.buttonDeleted = this.element.querySelector('.cat-info__deleted');

    this.catImage = this.element.querySelector('.cat-info__photo');
    this.catId = this.element.querySelector('.cat-info__number');
    this.catTitle = this.element.querySelector('.cat-info__header');

    this.catAge = this.element.querySelector('.cat-info__age-val');
    this.catText = this.element.querySelector('.cat-info__age-text');
    this.catAbout = this.element.querySelector('.cat-info__text');
    this.catRate = this.element.querySelector('.cat-info__rate');

    this.setEventListener();
    return this.element
  }

  setEventListener(){

  }
}
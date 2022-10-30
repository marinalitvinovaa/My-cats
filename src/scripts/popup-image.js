

class PopupImage extends Popup{
  constructor(className) {
    super(className)
  }


  open(data) {
    console.log(data);
    const imagePopup = this.popup.querySelector('.popup__image');
    imagePopup.src = data.img_link;
    super.open()
  }
}
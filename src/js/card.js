export default class Card {
  _open = false;
  _success = false;

  constructor(container, image, action) {
    this.card = document.createElement('div');
    this.card.classList.add('hvr-grow-shadow', 'game__card');
    this.image = document.createElement('img');
    this.image.src = image;
    this.image.classList.add('hidden');

    this.card.appendChild(this.image);

    this.card.addEventListener('click', () => {
      if (!this.open && !this.success) {
        this.image.classList.toggle('hidden');
        this.open = true;
        action(this);
      }
    });

    container.append(this.card);
  }

  set open(value) {
    this._open = value;
    value ? this.card.classList.add('open') : this.card.classList.remove('open');
  }

  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    value ? this.card.classList.add('success') : this.card.classList.remove('success');
  }

  get success() {
    return this._success;
  }
}

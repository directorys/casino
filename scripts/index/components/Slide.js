export default class Slide {
  constructor(slide) {
    this.slide = slide;
    this.widthElementsSlide = this.slide.map(() => 0);
  }

  // Размер слайдера:
  _size(i) {
    const scrollWidth = this.slide[i].scrollWidth;
    const clientWidth = this.slide[i].clientWidth;

    const componentWidth = scrollWidth - clientWidth;

    return componentWidth;
  }

  // Сладер делим на количество элементов:
  _score(i) {
    const slideElements = this.slide[i].children;

    const slidePixels = Math.ceil(this._size(i) / slideElements.length);

    return slidePixels;
  }

  // Назад:
  prev(i) {
    if (this.widthElementsSlide[i] >= this._score(i)) {
      this.widthElementsSlide[i] -= this._score(i);
    }

    this._scroll(i);
  }

  // Вперед:
  next(i) {
    if (this.widthElementsSlide[i] < this._size(i)) {
      this.widthElementsSlide[i] += this._score(i);
    }

    this._scroll(i);
  }

  // Крутящийся слайдер
  spin(i) {
    this.widthElementsSlide[i] < this._size(i)
    ? this.widthElementsSlide[i] += this._score(i)
    : this.widthElementsSlide[i] = 0

    this._scroll(i);
  }

  // Процесс передвижения слайдера:
  _scroll(i) {
    this.slide[i].scrollTo({
      top: 0,
      left: this.widthElementsSlide[i],
      behavior: 'smooth'
    })
  }
}
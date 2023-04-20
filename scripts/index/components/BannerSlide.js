import Slide from "./Slide.js";

export default class BannerSlide extends Slide {
  // / Размер слайдера:
  _size(i) {
    return this.slide[i].scrollWidth;
  }
}
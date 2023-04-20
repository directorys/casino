export default class Circle {
  set() {
    const templateBannerCircle = document.querySelector('.template-banner-circle').content;
    const bannerCircle = templateBannerCircle.querySelector('.banner__circle').cloneNode(true);

    return bannerCircle;
  }
}
import BannerSlide from "./components/BannerSlide.js";
import Circle from "./components/Circle.js";
import Slide from "./components/Slide.js";
import {bannerCards, bannerCircles, circles, dataSlide, nextSlide, prevSlide} from "./constants/constants.js";


// "В зависимости от количества баннеров, баннерам выдаются точки,
// среди которых активными должны быть те, которые совпадают индексу баннеров"
const banner = new BannerSlide(bannerCards);
const circle = new Circle();

bannerCards.forEach((card) => {
  const countChild = Array.from(card.children);
  circles.push(countChild.length);;
});

circles.forEach((number, i) => {
  bannerCircles[i].forEach((figure, j) => {
    for(let y = 0; y < number; y++) {
      figure.append(circle.set());
      Array.from(figure.children).forEach((child, a) => {
        if (j === a) child.classList.add("banner__circle_active");
      });
    }
  });
});

setInterval(() => {
  bannerCards.forEach((_, i) => {
    banner.spin(i);
  });
}, 5000); // скорость слайда

// Sliders
const slide = new Slide(dataSlide);

prevSlide.forEach((element, i) => {
  element.addEventListener('click', () => {
    slide.prev(i);
  });
});

nextSlide.forEach((element, i) => {
  element.addEventListener('click', () => {
    slide.next(i)
  });
});
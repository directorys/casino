import {infoHeader, infoPunkts, infoImage} from "./constants/constants.js";

// 1. Меню открывается и закрывается при клике на него:
infoHeader.forEach((head, id) => {
  head.addEventListener('click', () => {
    infoPunkts[id].classList.toggle('info__punkts_active');
    infoImage[id].classList.toggle('info__image_active');
  });
});
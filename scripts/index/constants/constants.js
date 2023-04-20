// slides
export const dataSlide = Array.from(document.querySelectorAll('[data-slide]'));
export const prevSlide = Array.from(document.querySelectorAll('[data-prev]'));
export const nextSlide = Array.from(document.querySelectorAll('[data-next]'));

// banners
export const circles = [];
export const countBanner = 0;

export const bannerCards = Array.from(
  document.querySelectorAll('.banner__cards')
).filter(card => !card.hasAttribute('data-not-cards'));

export const bannerCircles = bannerCards.map(card => Array.from(
  card.querySelectorAll('.banner__circles')
));

export default class Texts {
  constructor(paragraph, button) {
    this.isHeightText = false;
    this.paragraph = paragraph;
    this.button = button;
  }

  // Получаем высоту теста по стилю и реальной высоте:
  size() {
    const paragraphStyleHeight = window
    .getComputedStyle(this.paragraph)
    .getPropertyValue('height')

    const paragraphIntHeight = parseInt(paragraphStyleHeight);
    const paragraphScrollHeight = this.paragraph.scrollHeight;

    return {
      styleHeight: paragraphIntHeight,
      scrollHeight: paragraphScrollHeight
    };
  }

  // В зависимости от высоты показывается кнопка:
  has() {
    const {scrollHeight, styleHeight} = this.size();

    scrollHeight > styleHeight
      ? this.button.classList.remove('texts__paragraph_none')
      : this.button.classList.add('texts__paragraph_none')
  }

  // Свертывание и развертывание текста:
  toggle() {
    this.isHeightText = !this.isHeightText;

    this.isHeightText
      ? this.button.textContent = 'свернуть'
      : this.button.textContent = 'развернуть'

    this.paragraph.classList.toggle('texts__paragraph_active');
  }
}
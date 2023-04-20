import Texts from "./components/Texts.js";
import {paragraph, paragraphsBtn} from "./constants/constants.js";

const texts = new Texts(paragraph, paragraphsBtn);
texts.has();

paragraphsBtn.addEventListener('click', () => texts.toggle());

window.addEventListener('resize', () => texts.has());
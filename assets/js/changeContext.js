import changeBanner from "./changeBanner.js";
import changeTexts from "./changeTexts.js";

const html = document.querySelector("html");

const changeContext = (context) => {
  html.setAttribute("data-context", context);
  changeBanner(context);
  changeTexts(context);
};

export default changeContext;

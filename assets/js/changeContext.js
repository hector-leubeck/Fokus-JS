import changeBanner from "./changeBanner.js";

const html = document.querySelector("html");

const changeContext = (context) => {
  html.setAttribute("data-context", context);
  changeBanner(context);
};

export default changeContext;

const html = document.querySelector("html");
const focusBtn = document.querySelector(".app__card-button--foco");
const shortPauseBtn = document.querySelector(".app__card-button--curto");
const longPauseBtn = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");

focusBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
  banner.setAttribute("src", "/assets/img/");
});

shortPauseBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
});

longPauseBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
});

import changeContext from "./changeContext.js";

const focusBtn = document.querySelector(".app__card-button--foco");
const shortPauseBtn = document.querySelector(".app__card-button--curto");
const longPauseBtn = document.querySelector(".app__card-button--longo");

focusBtn.addEventListener("click", () => {
  changeContext("focus");
  setActiveButton(focusBtn);
});

shortPauseBtn.addEventListener("click", () => {
  changeContext("short-pause");
  setActiveButton("short-pause");
});

longPauseBtn.addEventListener("click", () => {
  changeContext("long-pause");
  setActiveButton("long-pause");
});

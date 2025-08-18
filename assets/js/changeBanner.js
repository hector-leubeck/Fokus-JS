const banner = document.querySelector(".app__image");

const changeBanner = (src) => {
  banner.setAttribute("src", `./img/${src}.png`);
};

export default changeBanner;

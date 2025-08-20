const banner = document.querySelector(".app__image");

const changeBanner = (bannerName) => {
  banner.setAttribute("src", `./assets/img/${bannerName}.png`);
};

export default changeBanner;

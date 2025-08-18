const banner = document.querySelector(".app__image");

const changeBanner = (banner) => {
  const images = {
    focus: "focus",
    "short-pause": "short-pause",
    "long-pause": "long-pause",
  };

  const bannerName = images[banner];
  if (!bannerName) {
    return banner.setAttribute("src", `../img/${bannerName}.png`);
  }
};

export default changeBanner;

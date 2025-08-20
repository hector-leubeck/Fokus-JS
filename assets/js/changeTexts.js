const title = document.querySelector(".app__title");
const subtitle = document.querySelector(".app__subtitle");

const changeTexts = (textContext) => {
  const titles = {
    focus: "Otimize sua produtividade,",
    "short-pause": "Que tal uma respirada?",
    "long-pause": "Hora de voltar para a superfície,",
  };

  const subtitles = {
    focus: "mergulhe no que importa.",
    "short-pause": "Hora de um intervalo.",
    "long-pause": "vamos relaxar um pouco.",
  };

  title.innerHTML = titles[textContext];
  subtitle.innerHTML = subtitles[textContext];
};

export default changeTexts;

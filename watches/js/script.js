var slider = tns({
  container: ".carousel__slider",
  responsive: {
    300: {
      controls: false,
      nav: false,
      autoplay: true,
      autoplayButtonOutput: false
    },
    600: {
      controls: false,
      nav: false,
      autoplay: true,
      autoplayButtonOutput: false
    },
    700: {
      controls: false,
      nav: false,
      autoplay: true,
      autoplayButtonOutput: false
    },
    900: {
      autoplay: true,
      autoplayButtonOutput: false,
      controls: false,
      speed: 2000,
      arrowKeys: true, 
      nav: false
    }
  }
});

document.querySelector(".prev").onclick = function() {
  slider.goTo("prev");
};

document.querySelector(".next").onclick = function() {
  slider.goTo("next");
};


var config = {
  source: {
    js: "./assets/js/**/_*.js",
    scss: {
      main: "./assets/scss/*.scss",
      partials: "./assets/scss/**/*.scss"
    },
    imgSprite: "./assets/images/sprite/*.{png,jpg,gif}"
  },
  dest: {
    js: "./assets/js/",
    css: "./assets/css/",
    img: "./assets/images/",
    scssSprite: "./assets/scss/config/"
  },
  build: {
    dir: "./build/",
    js: "./build/js/",
    css: "./build/css/",
    img: "./build/images/"
  }
};

module.exports = config;

var config = {
  source: {
    js: "./app/assets/js/**/*.js",
    scss: {
      main: "./app/assets/scss/*.scss",
      partials: "./app/assets/scss/**/*.scss"
    },
    imgSprite: "./app/assets/images/sprite/*.{png,jpg,gif}",
    html : "./app/index.html"
  },
  dest: {
    js: "./app/assets/js/",
    css: "./app/assets/css/",
    img: "./app/assets/images/",
    scssSprite: "./app/assets/scss/config/"
  },
  build: {
    dir: "./build/",
    js: "./build/js/",
    css: "./build/css/",
    img: "./build/images/"
  }
};

module.exports = config;

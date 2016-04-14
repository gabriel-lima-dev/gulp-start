var gulpconfig = {
  source: {
    js: './app/assets/js/**/*.js',
    scss: {
      main: './app/assets/scss/*.scss',
      partials: './app/assets/scss/**/*.scss'
    },
    imgSprite: './app/assets/images/sprite/*.{png,jpg,gif}',
    index : './app/index.html'
  },
  dest: {
    js: './app/assets/js/',
    css: './app/assets/css/',
    img: './app/assets/images/',
    scssSprite: './app/assets/scss/config/'
  },
  build: {
    dir: './build/',
    js: './build/js/',
    css: './build/css/',
    img: './build/images/'
  },
  specs: [
    './app/assets/js/**/*.js',
    './app/assets/js/*/*.js',
    './specs/**/*.js',
    './specs/*.js'
  ]
};

module.exports = gulpconfig;

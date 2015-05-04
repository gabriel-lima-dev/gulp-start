module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    browserSync({
      port: 9000,
      open: false,
      files: [
        paths.src_assets    +    'js/src/**/*.js',
        paths.src_assets    +    'css/*.css',
        paths.src_assets    +    'images/*.{png.jpg,gif}',
        paths.src_assets    +    'fonts/**/*',
        paths.src_code      +    '**/*.php',
        paths.src_templates +    '**/*.php',
        paths.src_locale    +    '**/*',
        paths.src_modules   +    '**/*.php'
      ],
      proxy: 'http://localhost/div64-skeleton/app/app/design/frontend/'
    });
  };
};

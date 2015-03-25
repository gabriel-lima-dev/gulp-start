var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');

module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.dest_img + '*.{gif,jpg,png}')
      .pipe(plugins.imagemin({
        progressive: true,
        use: [pngquant(), jpegtran()]
      }))
      .pipe(gulp.dest(paths.dest_img))
      .pipe(reload({stream: true}));
  };
};

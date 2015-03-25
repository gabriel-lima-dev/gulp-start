module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    // Fonts
    var fonts = gulp.src(paths.src_fonts + '*')
      .pipe(gulp.dest(paths.dest_fonts));

    // Images
    var images = gulp.src(paths.src_img + '*.{gif,jpg,png}')
      .pipe(gulp.dest(paths.dest_img))
  };
};

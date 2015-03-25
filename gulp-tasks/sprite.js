module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    var spriteData = gulp.src(paths.src_sprite + '*.png')
      .pipe(plugins.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        imgPath: '../img/sprite.png'
      }));
    spriteData.img.pipe(gulp.dest(paths.src_img));
    spriteData.css.pipe(gulp.dest(paths.src_scss + 'helpers/'));
  };
};

module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    paths.assets.map(function(folder) {
      var spriteData = gulp.src(folder + '/images/sprite/*.{png,jpg,gif}')
      .pipe(plugins.debug({ title: 'Create sprite image' }))
      .pipe(plugins.bytediff.start())
      .pipe(plugins.spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        imgPath: '../images/sprite.png'
      }));
      spriteData.img.pipe(gulp.dest(folder + '/images/'));
      spriteData.css.pipe(gulp.dest(folder + '/scss/config/'));

      return spriteData;
    });
  };
};

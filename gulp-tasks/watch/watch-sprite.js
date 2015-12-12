module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    var folders = paths.assets.map(function(folder) {
      return plugins.watch(path.join(folder + '/images/sprite/*.png'), function() {
        var spriteData = gulp.src(path.join(folder + '/images/sprite/*.png'))
        .pipe(plugins.plumber())
        .pipe(plugins.debug({ title: 'Watch Sprite Images files' }))
        .pipe(plugins.spritesmith({
          imgName: 'sprite.png',
          cssName: '_sprite.scss',
          imgPath: '../images/sprite.png'
        }));
        spriteData.img.pipe(gulp.dest(folder + '/images/'));
        spriteData.css.pipe(gulp.dest(folder + '/scss/config/'));

        return spriteData;
      });
    });
    return merge(folders);
  };
};

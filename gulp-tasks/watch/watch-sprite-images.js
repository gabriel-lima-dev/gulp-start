module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return plugins.watch(path.join(paths.src_assets, folder, '/images/sprite/*.png'), function() {
        var spriteData = gulp.src(path.join(paths.src_assets, folder, '/images/sprite/*.png'))
          .pipe(plugins.plumber())
          .pipe(plugins.debug({ title: 'Watch Sprite Images files' }))
          .pipe(plugins.spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            imgPath: '../images/sprite.png'
          }));
        spriteData.img.pipe(gulp.dest(paths.src_assets + folder + '/images/'));
        spriteData.css.pipe(gulp.dest(paths.src_assets + folder + '/scss/helpers/'));

        return spriteData;
      });
    });
    return merge(tasks);
  };
};

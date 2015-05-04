module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      var spriteData = gulp.src(path.join(paths.src_assets, folder, '/images/sprite/*.png'))
        .pipe(plugins.debug({ title: 'Create sprite image' }))
        .pipe(plugins.spritesmith({
          imgName: 'sprite.png',
          cssName: '_sprite.scss',
          imgPath: paths.src_assets + folder + '/images/sprite.png'
        }));
        spriteData.img.pipe(gulp.dest(paths.src_assets + folder + '/images/'));
        spriteData.css.pipe(gulp.dest(paths.src_assets + folder + '/scss/helpers/'));

        return spriteData;
    });
    return merge(tasks);
  };
};

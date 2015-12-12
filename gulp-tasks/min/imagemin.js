module.exports = function(gulp, plugins, paths, merge, path) {
  var imageminOptipng = require('imagemin-optipng');
  var imageminJpegtran = require('imagemin-jpegtran');

  return function () {
    var folders = paths.assets.map(function(folder) {
      return gulp.src([
        path.join(folder + '/images/*.{png,jpg,gif}'),
        path.join(folder + '/images/**/*.{png,jpg,gif}')
      ])
      .pipe(plugins.debug({ title: 'Minifying Images files' }))
      .pipe(plugins.bytediff.start())
      .pipe(plugins.imagemin({
        progressive: true,
        optimizationLevel: 7,
        use: [imageminOptipng (), imageminJpegtran ()]
      }))
      .pipe(plugins.bytediff.stop())
      .pipe(gulp.dest(folder + '/images/'));
    });
    return merge(folders);
  };
};

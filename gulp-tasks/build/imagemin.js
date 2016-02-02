module.exports = function(gulp, plugin, config) {
  var imageminOptipng = require('imagemin-optipng');
  var imageminJpegtran = require('imagemin-jpegtran');

  return function () {
    gulp.src(config.dest.img + '*.{png,jpg,gif}')
    .pipe(plugin.debug({ title: 'Minifying Images files' }))
    .pipe(plugin.bytediff.start())
    .pipe(plugin.imagemin({
      progressive: true,
      optimizationLevel: 7,
      use: [imageminOptipng (), imageminJpegtran ()]
    }))
    .pipe(plugin.bytediff.stop())
    .pipe(gulp.dest(config.build.img));
  };
};

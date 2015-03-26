module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
  gulp.src([paths.root + 'package.json', paths.root + 'bower.json'])
    .pipe(plugins.bump({
      type:'minor',
      indent: 2
    }))
    .pipe(gulp.dest('./'));
  };
};

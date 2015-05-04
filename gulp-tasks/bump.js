module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(['./package.json', './bower.json'])
      .pipe(plugins.bump({
        type:'minor',
        indent: 2
      }))
      .pipe(gulp.dest('./'));
  };
};

module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src([
      paths.src_vendor + 'jquery/dist/jquery.js',
      paths.src_vendor + 'parsleyjs/dist/parsley.js',
      paths.src_vendor + 'parsleyjs/src/i18n/pt-br.js',
      paths.src_js +     'components/*.js',
      paths.src_js +     '*.js'
    ])
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest(paths.dest_js))
    .pipe(reload({stream: true}));
  };
};

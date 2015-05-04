module.exports = function(gulp, del, plugins, browserSync, reload, paths) {
  return function (clean) {
    del([
      paths.dist_css + '*.css'
    ], clean);
  };
};

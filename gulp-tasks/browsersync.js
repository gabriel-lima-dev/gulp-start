module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    browserSync({
      port: 9000,
      server: {
        baseDir: "./"
      }
    });
  };
};

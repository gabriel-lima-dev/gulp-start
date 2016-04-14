module.exports = function(gulp, plugins, config) {
  const del = require('del');

  return function () {
    del([config.build.dir]);
  };
};

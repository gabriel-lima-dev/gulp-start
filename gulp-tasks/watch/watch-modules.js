module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function() {
		plugins.watch(path.join(paths.src_modules, '/*.xml'))
      .pipe(plugins.plumber())
			.pipe(plugins.debug({ title: 'Watch Modules XML files' }))
			.pipe(gulp.dest(paths.dest_modules_etc))
      .pipe(reload({stream: true}));

		plugins.watch(path.join(paths.src_modules, '/*/**'))
      .pipe(plugins.plumber())
			.pipe(plugins.debug({ title: 'Watch Modules files' }))
			.pipe(gulp.dest(paths.dest_modules))
      .pipe(reload({stream: true}));
	};
};

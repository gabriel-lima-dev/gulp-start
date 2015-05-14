module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
	return function() {
		plugins.watch(path.join(paths.src_locale, '/**'))
      .pipe(plugins.plumber())
			.pipe(plugins.debug({ title: 'Watch Locale files' }))
			.pipe(gulp.dest(paths.dest_locale))
      .pipe(reload({stream: true}));
	}
};

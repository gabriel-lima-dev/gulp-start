var gulpDir = "./gulp-tasks/";
var gulpConfig = require(gulpDir + 'gulpconfig');

module.exports = function(config) {
	config.set({
    basePath: '',
    files: gulpConfig.specs,
		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
		autoWatch: true,
		port: 9876,
		colors: true,
    logLevel: config.LOG_ERROR,
    client: {
      captureConsole: false
    },
		plugins: [
			'karma-jasmine',
      'karma-html-reporter',
      'karma-phantomjs-launcher'
		]
	});
};

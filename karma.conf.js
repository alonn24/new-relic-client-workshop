module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'lib/*.js',
			'workshop/**/*.js'
		],
		exclude: [
			'**/*.conf.js'
		],
		reporters: ['progress'],
		port: 8000,
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['Chrome'],
		singleRun: true
	})
};
const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config').markup;

// Copy html to build folder and notify browsersync
gulp.task('html', function() {
	return gulp
		.src(config.src)
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.stream());
});

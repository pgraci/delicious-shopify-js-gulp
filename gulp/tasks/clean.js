const gulp = require('gulp');
const del = require('del');
const config = require('../config').production;

// Clean compiled files
gulp.task('clean', () => del([`${config.dest}/css`, `${config.dest}/js`]));

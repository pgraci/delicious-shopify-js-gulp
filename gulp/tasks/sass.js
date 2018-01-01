const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const handleErrors = require('../util/handleErrors');
const config = require('../config').sass;
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () =>
    gulp
        .src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .on('error', handleErrors)
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.dest))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        )
);

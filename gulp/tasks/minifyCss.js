const gulp = require('gulp');
const config = require('../config').production;
const minifyCSS = require('gulp-minify-css');
const size = require('gulp-filesize');

gulp.task('minifyCss', ['sass'], () =>
    gulp
        .src(config.cssSrc)
        .pipe(
            minifyCSS({
                keepBreaks: true
            })
        )
        .pipe(gulp.dest(`${config.dest}`))
        .pipe(size())
);

/*
 * Notes:
 * - gulp/tasks/browserify.js handles js recompiling with watchify
 * - gulp/tasks/browserSync.js watches and reloads compiled files
 */

const gulp = require('gulp');
const config = require('../config');
const watchify = require('./browserify');

gulp.task('watch', ['watchify', 'browserSync'], callback => {
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.markup.src, ['html']);
    // Watchify will watch and recompile our JS, so no need to gulp.watch it
});

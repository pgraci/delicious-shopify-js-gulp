const gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['clean', 'minifyCss', 'uglifyJs']);

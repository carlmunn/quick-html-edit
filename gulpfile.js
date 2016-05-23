'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var path    = require('path');

gulp.task('default', ['connect', 'watch:sass', 'watch:www']);

gulp.task('livereload', function(){
  gulp.src(path.join('www', '*.html'))
    .pipe(connect.reload());
})

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    defaultFile: 'index.html',
    host: 'localhost',
    livereload: true
  });
});

gulp.task('sass', function(){
  return sass('./scss/**/*.scss').
    on('error', sass.logError).
    pipe(gulp.dest('./www/css'));
});

gulp.task('watch:sass', function(){
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('watch:www', function(){
  gulp.watch(['www/**/*'], ['livereload']);
});

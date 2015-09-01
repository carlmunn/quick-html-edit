'use strict';

var gulp  = require('gulp');
var sass  = require('gulp-sass');
var serve = require('gulp-server-livereload');

gulp.task('default', ['sass:watch', 'serve']);

gulp.task('sass', function(){
  gulp.src('./scss/**/*.scss').
    pipe(sass().on('error', sass.logError)).
    pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('serve', function(){
	gulp.src('.').pipe(serve({
		livereload:true,
		defaultFile: 'index.html'
		//directoryListing: true,
		//open:true
	}));
});

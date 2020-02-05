'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
 
gulp.task('sass', function (done) {
  gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./src/css/'));
	done()
});

gulp.task('minify', () => {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(rename({suffix: '-min'}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('minify-css', () => {
  return gulp.src('./src/css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '-min'}))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('tiny-img', (done) => {
  gulp.src('src/img/*')
    .pipe(imagemin())
	.pipe(gulp.dest('build/img'));
	done()
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/main.scss', ['sass']);
});
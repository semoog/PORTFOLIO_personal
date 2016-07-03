var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var input = './sass/*.sass';
var output = './css';

gulp.task('styles', function(){
  return gulp.src(input)
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(output));
});

gulp.task('default', function(){
  gulp.watch(input, ['styles']);
});

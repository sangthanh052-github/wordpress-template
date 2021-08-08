var gulp = require('gulp');
// var sass = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));
gulp.task('scss', function () {
  gulp.src('./wp-content/themes/twentytwentyone/assets/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./wp-content/themes/twentytwentyone/'));
});
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('static/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/static/css'));
}

function watch() {
  gulp.watch('static/sass/**/*.scss', compileSass);
}


gulp.task('default', gulp.series(compileSass, watch));

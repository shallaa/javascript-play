var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('clean:sass', function(){
  gulp.src('dist/css', { read: false }).pipe(clean({ force: true }));
});

gulp.task('build:sass', ['clean:sass'], function(){
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch:sass', ['build:sass'], function(){
  gulp.watch('src/sass/**/*.scss', ['build:sass']);
});
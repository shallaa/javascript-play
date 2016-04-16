var gulp = require('gulp');
var clean = require('gulp-clean');
var replace = require('gulp-replace');

gulp.task('clean:html', function(){
  gulp.src('dist/index.html', { read: false }).pipe(clean({ force: true }));
});

gulp.task('build:html', ['clean:html'], function(){
  gulp.src('src/index.html')
    .pipe(replace('___VERSION___', Date.now() + ''))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch:html', ['build:html'], function(){
  gulp.watch('src/index.html', ['build:html']);
});
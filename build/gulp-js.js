var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sourcestream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('clean:js', function(){
  gulp.src('dist/js', { read: false }).pipe(clean({ force: true }));
});

gulp.task('build:js', ['clean:js'], function(){
  browserify('src/app.js', { debug: true })
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(sourcestream('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch:js', ['build:js'], function(){
  gulp.watch('src/**/*.js', ['build:js']);
});
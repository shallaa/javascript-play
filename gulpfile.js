var path = require('path');
var gulp = require('gulp');

require('require-all')(path.resolve(__dirname, 'build'));

gulp.task('build', ['build:sass', 'build:js', 'build:html']);
gulp.task('watch', ['watch:sass', 'watch:js', 'watch:html']);

gulp.task('default', ['watch', 'server']);
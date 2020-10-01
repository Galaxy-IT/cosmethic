global.$ = {
  path: {
    task: require('./tasks/web')
  },
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:libs', 'styles:dev', 'pug', 'js:libs', 'js:copy', 'svg', 'img:dev', 'img:webp', 'video', 'fonts', 'favicon', 'svg:copy')));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:libs', 'styles:build', 'pug', 'js:libs', 'js:build', 'svg', 'img:build', 'img:webp', 'video', 'fonts', 'favicon', 'svg:copy', 'htaccess')));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

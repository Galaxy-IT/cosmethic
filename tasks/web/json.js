module.exports = function () {
  $.gulp.task('json', () => {
    return $.gulp.src('./static/json/**/*.*')
      .pipe($.gulp.dest('./build/static/json/'));
  });
};

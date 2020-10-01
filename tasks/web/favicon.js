module.exports = function () {
  $.gulp.task('favicon', () => {
    return $.gulp.src('./static/favicon/**/*.*')
      .pipe($.gulp.dest('./build/static/favicon/'));
  });
};

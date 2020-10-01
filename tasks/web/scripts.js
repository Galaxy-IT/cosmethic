const libs = require('../libs');

module.exports = function () {
  $.gulp.task('js:libs', () => {
    return $.gulp.src(libs)
      .pipe($.gp.concat('libs.js'))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.gp.uglify())
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('js:copy', () => {
    return $.gulp.src(['./static/js/main.js'])
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('js:build', () => {
    return $.gulp.src(['./static/js/main.js'])
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.gp.uglify())
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gulp.dest('./build/static/js/'))
  });
};

const SCSS = true

module.exports = SCSS ? scss : stylus

function stylus () {
  $.gulp.task('styles:dev', () => {
    return $.gulp.src('./static/stylus/main.styl')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.stylus({
        'include css': true
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Stylus',
          message: error.message
        };
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('styles:build', () => {
    return $.gulp.src('./static/stylus/main.styl')
      .pipe($.gp.stylus({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
  });

  $.gulp.task('styles:libs', () => {
    return $.gulp.src('./static/stylus/libs.styl')
      .pipe($.gp.stylus({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('libs.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('libs.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
  });
}

function scss () {
  $.gulp.task('styles:dev', () => {
    return $.gulp.src('./static/scss/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.plumber())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('styles:build', () => {
    return $.gulp.src('./static/scss/main.scss')
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('main.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
  });

  // Stylus libs (support css)
  $.gulp.task('styles:libs', () => {
    return $.gulp.src('./static/scss/libs.scss')
      .pipe($.gp.stylus({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('libs.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('libs.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
  });

}

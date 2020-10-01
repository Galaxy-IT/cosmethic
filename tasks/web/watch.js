module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./templates/**/*.pug', $.gulp.series('pug'))
    $.gulp.watch('./static/scss/**/*.scss', $.gulp.series('styles:dev'))
    $.gulp.watch('./static/img/svg-sprites/*.svg', $.gulp.series('svg'))
    $.gulp.watch('./static/js/**/*.js', $.gulp.series('js:copy'))
    $.gulp.watch('./static/video/**/*.*', $.gulp.series('video'))
    $.gulp.watch(
      [
        './static/img/general/**/*.{png,jpg,gif,JPG}',
        './static/img/content/**/*.{png,jpg,gif,JPG}',
        './static/img/png-icons/**/*.{png,jpg,gif,JPG}',
      ],
      $.gulp.series('img:dev')
    )
    $.gulp.watch(
      [
        './static/img/general/**/*.{png,jpg,gif,JPG}',
        './static/img/content/**/*.{png,jpg,gif,JPG}',
        './static/img/png-icons/**/*.{png,jpg,gif,JPG}',
      ],
      $.gulp.series('img:webp')
    )
    $.gulp.watch(['./static/img/svg/*.svg'], $.gulp.series('svg:copy'))
  })
}

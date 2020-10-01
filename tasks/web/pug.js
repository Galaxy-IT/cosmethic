const pugBem = require('gulp-pugbem');

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src('./templates/pages/*.pug')
      .pipe($.gp.pug({
        plugins: [pugBem],
        locals: {
          nav: JSON.parse($.fs.readFileSync('./stubs/navigation.json', 'utf8')),
          content: JSON.parse($.fs.readFileSync('./stubs/content.json', 'utf8')),
          menuGlobal: JSON.parse($.fs.readFileSync('./stubs/menu.json', 'utf8'))
        },
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Pug',
          message: error.message
        };
      }))
      .pipe($.gulp.dest('./build/'))
      .on('end', $.browserSync.reload);
  });
};

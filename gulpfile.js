const gulp = require('gulp');
const watch = require('gulp-watch');
const $ = require('gulp-load-plugins')();
const bs = require('browser-sync').create();

gulp.task('notify:server', () => {
  return gulp.src('gulpfile.js')
      .pipe($.notify('Server ready!'));
});

gulp.task('reloadBrowsers', () => {
  return bs.reload();
});

gulp.task('default', () => {

	bs.init({
      notify: false,
      port: 9000,
      server: { baseDir: ['app'] }
  });

	gulp.watch(['app/*.html', 'app/**/*.js'], ['reloadBrowsers']);

});

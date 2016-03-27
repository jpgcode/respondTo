const gulp   = require('gulp');
const watch  = require('gulp-watch');
const $      = require('gulp-load-plugins')();
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const bs     = require('browser-sync').create();



gulp.task('notify:server', () => {
  return gulp.src('gulpfile.js')
      .pipe($.notify('Server ready!'));
});


gulp.task('reloadBrowsers', () => {
  return bs.reload();
});


gulp.task('minifyJS', () => {

    return gulp.src('src/respondTo.js')
        .pipe(uglify({ preserveComments: 'all' }))
        .pipe(rename('respondTo.min.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('default', () => {

	bs.init({
        notify: false,
        port: 9000,
        server: { baseDir: ['./','demo'] }
    });


    gulp.watch(['src/**/*.js'], ['minifyJS']);
	gulp.watch(['demo/*.html'], ['reloadBrowsers']);

});

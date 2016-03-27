const gulp           = require('gulp');
const watch          = require('gulp-watch');
const uglify         = require('gulp-uglify');
const rename         = require('gulp-rename');
const argv           = require('yargs').argv;
const mochaPhantomJS = require('gulp-mocha-phantomjs');
const bs             = require('browser-sync').create();



gulp.task('reloadBrowsers', () => {
  return bs.reload();
});


gulp.task('minifyJS', () => {

    return gulp.src('src/respondTo.js')
        .pipe(uglify({ preserveComments: 'all' }))
        .pipe(rename('respondTo.min.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('test', function() {

    var viewportSize,
        testFile;

    if(argv.desktop || argv.tablet || argv.mobile){
        if(argv.desktop){
            testFile = './test/desktop.html';
            viewportSize = { width: 1280, height: 768 };
        }else if(argv.tablet){
            testFile = './test/tablet.html';
            viewportSize = { width: 768, height: 640 };
        }else if(argv.mobile){
            testFile = './test/mobile.html';
            viewportSize = { width: 320, height: 640 };
        }
    }

    return gulp.src(testFile)
        .pipe(mochaPhantomJS({
            phantomjs: {
                viewportSize: viewportSize,
                useColors:true
            }
        }));
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

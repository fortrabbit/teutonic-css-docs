
// INIT plugins

const gulp            = require('gulp');
const sass            = require('gulp-sass');
const prefix          = require('gulp-autoprefixer');
const sourcemaps      = require('gulp-sourcemaps');
const cleanCSS        = require('gulp-clean-css');
const browserSync     = require('browser-sync').create();


// VARIBALES

const styleWatchDir   = '../teutonic-css/**/*.{css,scss}'; // All CSS & SCSS files to watch out for changes
const styleSourceFile = '../teutonic-css/teutonic.scss';   // The one file including all imports
const docsTargetDir   = 'docs/css';                        // Put the generated file here (development)
const docsRoot        = 'docs';                            // Generated output of Jekyll during DEV

const browserSyncConfig = {
  files: [docsRoot + '/**/*'],
  proxy: "127.0.0.1:4000",
  port: 4000
}

// Generate CSS for docs during development
// with sourcemaps and not minified
function styles() {
  return gulp
    .src(styleSourceFile)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(docsTargetDir))
    .pipe(browserSync.stream());
}

function watchStyles(done) {
  gulp.watch(styleSourceFile, gulp.series('styles'));
  done();
}

function browserSyncInit(done) {
  browserSync.init(browserSyncConfig)
  done();
}

// Tasks
gulp.task('styles', styles);
gulp.task('watchStyles', watchStyles)
gulp.task('browserSyncInit', browserSyncInit);
gulp.task('watch', gulp.parallel('styles'));
gulp.task('default', gulp.series('styles', gulp.parallel('watch', 'browserSyncInit')));
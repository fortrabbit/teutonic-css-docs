// INIT plugins

var gulp            = require('gulp');
var sass            = require('gulp-sass');
var prefix          = require('gulp-autoprefixer');
var sourcemaps      = require('gulp-sourcemaps');
var cleanCSS        = require('gulp-clean-css');
var header          = require('gulp-header');
var browserSync     = require('browser-sync').create();


// VARIBALES

var styleWatchDir   = '../teutonic-css/**/*.{css,scss}'; // All CSS & SCSS files to watch out for changes
var styleSourceFile = '../teutonic-css/teutonic.scss';   // The one file including all imports
var docsTargetDir   = 'docs/css';                        // Put the generated file here (development)
var docsRoot        = 'docs';                            // Generated output of Jekyll during DEV


// Header
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

// Generate CSS for docs during development
// with sourcemaps and not minified
gulp.task('sass', function () {
  return gulp.src(styleSourceFile)
    .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      // .pipe(prefix({
      //   browsers: ['last 1 version'],
      //   cascade: false
      // }))
    .pipe(sourcemaps.write('./'))
    .pipe(cleanCSS())
    //.pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(docsTargetDir))
    .pipe(browserSync.stream());
});

// Serve
gulp.task('default', ['sass'], function() {
  browserSync.init({
    files: [docsRoot + '/**/*'],
    proxy: "127.0.0.1:4000",
    //server: docsRoot,
    port: 4000
  });
  gulp.watch(styleWatchDir, ['sass']);
});
/* File: gulpfile.js */

// grab our gulp packages
const gulp  = require('gulp'),
      stylus = require('gulp-stylus'),
      browserSync = require('browser-sync').create(),
      plumber = require('gulp-plumber'),
      exec = require('child_process').exec;

const onError = function (err) {
  // gutil.beep()
  console.log()
  console.log("** ERROR **, probably in stylus")
  beep()
}

function beep(){
  exec('canberra-gtk-play --file=/home/angelo/music/gulp.ogg');
}

gulp.task('styles', function() {
  return gulp.src('./stylus/*.styl')
    .pipe(plumber({ errorHandler: onError}))
    .pipe(stylus())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: false
  })
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./stylus/*.styl', ['styles'])
})


gulp.task('default', [
  'styles',
  'browser-sync'
])
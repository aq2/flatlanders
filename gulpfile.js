/* File: gulpfile.js */
/* eslint-disable no-console */

const gulp  = require('gulp'),
      stylus = require('gulp-stylus'),
      browserSync = require('browser-sync').create(),
      plumber = require('gulp-plumber'),
      // changed = require('gulp-changed'),
      // slows things down?  maybe use with bigger project
      exec = require('child_process').exec

// -------- my functions ------------

const onError = function () {
  console.log()
  console.log("** ERROR **, probably in stylus")
  beep()
}

function beep(){
  exec('canberra-gtk-play --file=/home/angelo/music/gulp.ogg')
}


// -------- my tasks of goodness ------------

gulp.task('copyHTML', () => {
  gulp.src('src/*.html')
      // change slows things down ~ 6->8 secs
      // .pipe(changed('public'))
      .pipe(gulp.dest('public'))
})

gulp.task('copyApp', function () {
  gulp.src('src/app.js')
      // .pipe(changed('public'))
      .pipe(gulp.dest('public'))
})

gulp.task('styles', function() {
  return gulp.src('./src/stylus/*.styl')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('./public'))
    .pipe(gulp.dest('./src'))
    .pipe(browserSync.stream())
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './public'
    },
    open: false
  })
  gulp.watch('./src/*.html').on('change', browserSync.reload)
  gulp.watch('./src/stylus/*.styl', ['styles'])
})


gulp.task('default', [
  'styles',
  'copyHTML',
  'copyApp',
  'browser-sync'
])

var gulp = require('gulp')
var pipeline = require('readable-stream').pipeline
const minify = require('gulp-minify')

var clean = require('gulp-clean')

const public = 'server/public'
const dist = 'server/dist'

gulp.task('clean', async () => {
  await gulp.src(dist, { read: false }).pipe(clean())
})

gulp.task('min-js', async () => {
  return gulp
    .src(public + '/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest(dist + '/js'))
})

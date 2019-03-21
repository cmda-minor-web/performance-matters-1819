const gulp = require('gulp');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
const baseDir = './src/css/';

gulp.src([
	baseDir + 'styles.css',
	])    
.pipe(concat('styles.min.css'))    
.pipe(cssnano({ discardComments: { removeAll: true }}))    
.pipe(gulp.dest('./src/css'));
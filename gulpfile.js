const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('app/scss/index.scss')
    .pipe(sass())
    .pipe(dest('app/css'))
}

function watchTask() {
  watch(['app/scss/index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
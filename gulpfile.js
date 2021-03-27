const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

gulp.task('css', function() {
    return gulp.src('src/css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default',
     gulp.series(['css','js'])
);
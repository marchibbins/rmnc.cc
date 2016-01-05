// Setup
var gulp = require('gulp'),
    del = require('del'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass');

// Styles
gulp.task('styles', function() {
    return sass('sass/main.scss', {
        style: 'expanded',
        sourcemap: true
    })
    .pipe(gulp.dest('css'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(notify({
        message: 'Styles task complete'
    }));
});

// Clean
gulp.task('clean', function(cb) {
    del(['css'], cb)
});

// Watch
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});

// Default
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');

gulp.task('compile-pug-to-html', function buildHTML() {
    return gulp.src('src/views/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('src'))
});

gulp.task('watch', ['browserSync', 'compile-scss-to-css'],function(){
    gulp.watch('src/stylesheets/scss/*', ['compile-scss-to-css']);
    gulp.watch('src/views/*.pug', ['compile-pug-to-html'])
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
});

gulp.task('compile-scss-to-css', function(){
    return gulp.src('src/stylesheets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/stylesheets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('useref', function(){
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            interlaced: true,
        }))
        .pipe(gulp.dest('dist/images'))
});


gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean', function() {
    return del.sync('dist');
})

gulp.task('clean:dist', function() {
    return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

gulp.task('develop', function(callback) {
    runSequence(
        ['compile-scss-to-css', 'compile-pug-to-html', 'browserSync'],
        'watch',
        callback
    )
});

gulp.task('build', function(callback) {
    runSequence(
        'clean:dist',
        'compile-scss-to-css',
        ['useref', 'images', 'fonts'],
        callback
    )
});
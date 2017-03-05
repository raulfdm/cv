const gulp = require('gulp'),
    browser = require('browser-sync'),
    pug = require('gulp-pug'),
    clean = require('gulp-clean'),
    ghPages = require('gulp-gh-pages'),
    cssmin = require('gulp-cssmin'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    sequence = require('gulp-sequence');

gulp.task('build-deploy', sequence('build', 'deploy'))

gulp.task('build', sequence('clean', 'pugBuild'))

gulp.task('deploy', function () {
    return gulp
        .src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('clean', function () {
    return gulp
        .src('dist/')
        .pipe(clean())
});

gulp.task('cleanMinified', function () {
    return gulp
        .src('src/**/*.min.*')
        .pipe(clean());
});

gulp.task('cssmin', function () {
    return gulp
        .src('src/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css/'))
});

gulp.task('babel', function () {
    return gulp
        .src('src/scripts/**/*.js')
        .pipe(babel())
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/scripts/'));
});

gulp.task('pug', function buildHTML() {
    return gulp
        .src('src/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('sv', function () {

    //Init the server
    browser.init({
        server: {
            baseDir: 'dist',
            index: "index.html",
            routes: {
                "/cv": "dist"
            }
        },
        startPath: '/cv'
    });

    //Escuta de alterações
    gulp
        .watch('dist/**/*.*')
        .on('change', browser.reload);
    gulp
        .watch('src/**/*.*', ['pugBuild'])
        .on('change', () => {});

});

gulp.task('pugBuild', callback => {
    sequence('cleanMinified', [
        'babel', 'cssmin'
    ], 'pug')(callback)
})

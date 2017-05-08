const gulp = require('gulp'),
    browser = require('browser-sync'),
    pug = require('gulp-pug'),
    clean = require('gulp-clean'),
    ghPages = require('gulp-gh-pages'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    sequence = require('gulp-sequence'),
    postcss = require('gulp-postcss'),
    sourceMaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    postImport = require('postcss-import'),
    cssNano = require('gulp-cssnano')

gulp.task('deploy', sequence('build', 'ghpages'))

gulp.task('build', ['clean'], () => gulp.start('pug','babel','css'))

gulp.task('ghpages', () => gulp.src('./dist/**/*').pipe(ghPages()));

gulp.task('clean', () => gulp.src('dist/').pipe(clean()));

gulp.task('css', () => {
    return gulp
        .src('src/css/index.css')
        .pipe(sourceMaps.init())
        .pipe(postcss([autoprefixer(), postImport()]))
        .pipe(cssNano())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'))
})

gulp.task('babel', () => {
    return gulp
        .src('src/scripts/**/*.js')
        .pipe(babel())
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('pug', () => {
    return gulp
        .src('src/*.pug')
        .pipe(pug({pretty: false}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('sv', () => {

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
        .watch('src/**/*.*', ['build'])
        .on('change', ()=>setTimeout(browser.reload,600));

});
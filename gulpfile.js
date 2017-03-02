const gulp = require('gulp'),
    browser = require('browser-sync');


gulp.task('server', function() {

    //Iniciando o servidor
    browser.init({
        server: {
            baseDir: 'src'
        }
    });

    //Escuta de alterações
    gulp.watch('src/**/*.*').on('change', browser.reload);
})
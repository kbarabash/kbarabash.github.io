var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 3001,
            livereload: true,
            https: true,
            directoryListing: true,
            open: true
        }));
});

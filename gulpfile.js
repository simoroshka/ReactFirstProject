var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('style/scss/**/*.scss',['styles']);
});

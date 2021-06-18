var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);

gulp.task('iconfont', function(){
    return gulp.src(['assets/svg/*.svg'])
        .pipe(iconfont({
            fontName: 'Taxaprisma', // required
            appendUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp // recommended to get consistent builds when watching files
        }))
        .pipe(gulp.dest('assets/font/'));
});

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var named = require('vinyl-named');
var webpack = require('gulp-webpack');

var files = {
    js: ['./src/js/*.js','./src/js/contentScripts/*.js']
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src('.src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/////////////// webpack generator /////////////////
function webpackGenerator(id) {
    let source = files[id][0];
    if (typeof source == 'string') {
        source = [source];
    }

    return gulp.src(source)
        .pipe(named())
        .pipe(webpack({
            devtool: '#inline-source-map'
        }))
        .pipe(gulp.dest('./public/build/js'));
}


gulp.task('js',    () => { return webpackGenerator('js')    });

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['lint', 'js']);
});

gulp.task('default', ['js', 'watch', 'lint']);
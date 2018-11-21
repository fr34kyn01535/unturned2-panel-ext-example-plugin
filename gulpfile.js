const gulp = require('gulp');
const path = require('path');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

var output = 'dist/' + __dirname.split(path.sep).pop() + "/";

gulp.task('typescript', function() {
    var tsResult = gulp.src(['./**/*.ts','!node_modules/**/*']).pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(output));
});

gulp.task('views', function() {
    gulp.src('./views/**/*.*').pipe(gulp.dest(output + 'views/'));
});

gulp.task('default',["typescript", "views"])
const { src, dest } = require('gulp');
const babel = require('gulp-babel');

exports.default = function (done) {
    src('es6/**/*.js')
        .pipe(babel())
        .pipe(dest('dist'));

    src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(dest('public/dist'));
        
    done();
}
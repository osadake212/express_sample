'use strict';

var
  gulp        = require('gulp'),
  watch       = require('gulp-watch'),
  jslint      = require('gulp-jslint'),
  stylus      = require('gulp-stylus'),
  js_path     = ['*.js', 'public/js/**/*.js', 'libs/**/*js', 'migrations/**/*.js'],
  stylus_path = ['public/css/stylus/*.styl'],
  compile_stylus, run_jslint;

// ----- stylusのコンパイル -----

compile_stylus = function () {
  console.log("----- start compile .styl -----");
  gulp.src(stylus_path)
      .pipe(stylus())
      .pipe(gulp.dest("public/css"))
      .on('end', function () {
        console.log("----- end compile .styl -----");
      });
};

gulp.task('stylus', compile_stylus);

// ----- JSLint -----
run_jslint = function () {
  console.log("----- start lint .js -----");
  gulp.src(js_path)
      .pipe(jslint({
        continue: true,
        devel: true,
        indent: 2,
        maxerr: 50,
        newcap: true,
        white: true,
        plusplus: true,
        regexp: true,
        sloppy: true,
        vars: false,
        node: true,
        reporter: "default",
        nomen: true,
        errorsOnly: false,
        unparam: true,
        todo: true
      }))
      .on('error', function (error) {
        console.error(String(error));
      })
      .on('end', function() {
        console.log("----- end lint .js -----");
      });
};

gulp.task('jslint', run_jslint);

// ----- 監視タスク -----

gulp.task('watch_stylus', function (callback) {
  gulp.watch(stylus_path, compile_stylus);
});

gulp.task('watch_js', function (callback) {
  gulp.watch(js_path, run_jslint);
});

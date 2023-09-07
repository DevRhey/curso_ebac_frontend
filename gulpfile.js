const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImagens() {
  return gulp
    .src("./source/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/img"));
}

function comprimeJavaScript() {
  return gulp
    .src("./source/js/**/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/js"));
}

function compilaSass() {
  return gulp
    .src("./source/style/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/style"));
}
exports.sass = compilaSass;
exports.default = function () {
  gulp.watch(
    "./source/style/**/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  gulp.watch(
    "./source/js/**/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJavaScript)
  );

  gulp.watch(
    "./source/img/**/*",
    { ignoreInitial: false },
    gulp.series(comprimeImagens)
  );
};

//const gulp = require("gulp");

//function funcaoPadrao(callback) {
// console.log("Exectando via gulp");
//  callback();
//}
//function dizOi(callback) {
//  console.log("Oi");
// dizTchau();
/// callback();
//}

//function dizTchau() {
// console.log("Tchau");
//}

//exports.default = gulp.parallel(funcaoPadrao, dizOi);
//exports.default = gulp.series(funcaoPadrao, dizOi);

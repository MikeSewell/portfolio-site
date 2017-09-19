const gulp = require("gulp")
var sass = require("gulp-sass")
var browserSync = require("browser-sync").create()
// var babel = require("gulp-babel")

gulp.task("scss", function() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
})

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
})

// gulp.task("babel", function() {
//   return gulp.src("src/app.js").pipe(babel()).pipe(gulp.dest("dist"))
// })

gulp.task("default", ["browser-sync", "scss"], function() {
  gulp.watch("./scss/**/*.scss", ["scss"])
})

// 直接把dts文件拷贝到miniprogram_npm
const gulp = require('gulp')
gulp.task('dts', function () {
  return gulp
    .src([
      './node_modules/@vant/weapp/dist/**/*.d.ts'
    ])
    .pipe(gulp.dest('./miniprogram_npm/@vant/weapp'))
})
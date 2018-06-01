//1.先导入需要的插件
const gulp = require('gulp');//gulp插件
const sass = require('gulp-sass');//编译sass插件
const cssnano = require('gulp-cssnano');//压缩css
const rename = require('gulp-rename');//重命名
const uglify = require('gulp-uglify');//压缩JS
const concat = require('gulp-concat');//合并JS
//编译sass,重命名，压缩CSS任务
gulp.task('sass',function(){
	gulp.src('src/sass/*.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest('css'));
})
//压缩js/重命名JS/合并JS
gulp.task('js',function(){
	gulp.src('src/js/*.js').pipe(uglify()).pipe(rename({"suffix":".min"})).pipe(concat("all.min.js")).pipe(gulp.dest('js'));
})
gulp.task('watch',function(){
	gulp.watch(['src/sass/*.scss','src/js/*.js'],['sass','js']);
})

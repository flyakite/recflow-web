var gulp = require('gulp');
var i18n = require('gulp-html-i18n');

gulp.task('default', ['watch']);

gulp.task('build', function() {
  //localization
  var dest  = './';
  var indexsrc = './src/index.html';
  var defaultLang = 'en';
  return gulp.src(indexsrc)
    .pipe(i18n({
      langDir: './lang',
      trace: true,
      createLangDirs: true,
      defaultLang: defaultLang,
      renderEngine: 'mustache'
    }))
    .pipe(gulp.dest(dest));
    
    gulp.src(defaultLang + '/index.html')
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch(['src/*.html', 'lang/*/*.yaml'], ['build']);
});
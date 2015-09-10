var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('scripts', function() {
 return gulp.src(['public/js/controllers/*.js'])
   .pipe(concat('allStoreControllers.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('public/js/controllers'));
});

gulp.task('styles', function() {
 return gulp.src(['public/css/*.css'])
   .pipe(concat('main.css'))
   .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['styles']);


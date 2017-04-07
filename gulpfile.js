var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
	connect.server({
		liverload:true
	}); 
});


gulp.task('default', ['webserver']);
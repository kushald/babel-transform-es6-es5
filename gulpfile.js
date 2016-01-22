'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var src = require('vinyl-source-stream');

// Build task 
gulp.task('build', function() {
	browserify('index.js')
	.transform('babelify', {presets: ["es2015"]}) //transform ES6 to ES5 using babelify
	.bundle() // bundle the transformed file into a single file
	.pipe(src('bundle.js')) // pipe it to bundle.js file
	.pipe(gulp.dest('./js')); // copy bundle file in js folder
});
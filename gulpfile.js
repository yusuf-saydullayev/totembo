global.$ = {
    gulp:   require('gulp'),
    gp:     require('gulp-load-plugins')(),
    bs:     require('browser-sync').create(),
    path:{
        tasks:      require('./gulp/config/tasks'),
        serverDir:  './app/build',
        src:{
            html:   './app/src/*.html',
            css:    './app/src/styles/*.scss',
            js:     './app/src/scripts/*.js',
            img:    './app/src/images/*.{png,jpg,jfif,webp,jpeg}',
            fonts:  './app/src/fonts/**/*.*'
        },
        build:{
            html:   './app/build/',
            css:    './app/build/styles/',
            js:     './app/build/scripts/',
            img:    './app/build/images/',
            fonts:  './app/build/fonts/'
        },
        watch:{
            html:   ['./app/src/*.html','./app/src/views/**/*.html'],
            css:    ['./app/src/styles/*.scss','./app/src/styles/**/*.scss'],
            js:     './app/src/scripts/*.js',
            img:    './app/src/images/*.{png,jpg,jfif,webp,jpeg}',
            fonts:  './app/src/fonts/**/*.*'
        }
    }
}

// console.log(require($.path.tasks));
$.path.tasks.forEach(oneTask => require(oneTask)());

$.gulp.task('default', $.gulp.series($.gulp.parallel('html','css','img','js','fonts','serve','watch')))
$.gulp.task('build', $.gulp.series($.gulp.parallel('html','css','img','js','fonts')))
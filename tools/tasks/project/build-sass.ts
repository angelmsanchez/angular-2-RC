import * as gulp from 'gulp';
import { join } from 'path';
import * as merge from 'merge-stream';
import Config from '../../config';
import * as gulpLoadPlugins from 'gulp-load-plugins';
const plugins = <any>gulpLoadPlugins();

console.log('Compiling Sass --> CSS');

let sassOptions: any = {
    style: 'expanded',
    errLogToConsole: true
};

function processAppStyles() {
    console.log('...Compiling app global styles.');
    return gulp.src(join(Config.SCSS_SRC, 'style.scss'))
        .pipe(plugins.sass(sassOptions))
        .pipe(gulp.dest(join(Config.ASSETS_SRC, 'css')));
}

function processComponentSass() {
    console.log('...Compiling app components styles.');
    return gulp.src([
        join(Config.APP_SRC, '**', '*.scss'),
        '!' + join(Config.SCSS_SRC, '**', 'style.scss')
    ])
        .pipe(plugins.sass(sassOptions))
        .pipe(gulp.dest(Config.APP_SRC));
}
export = () => merge(processAppStyles(), processComponentSass());

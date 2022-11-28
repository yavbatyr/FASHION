import dartSass             from 'sass';
import gulpSass             from 'gulp-sass';
import rename               from 'gulp-rename'; 
import cleanCss             from 'gulp-clean-css'; // Cжamue CSS фaŭлa
import webpcss              from 'gulp-webpcss'; // Bыboд WEBP uзображений
import autoprefixer         from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Групировка мedua зanpocoв

const sass = gulpSass (dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass(
            {
                outputStyle: 'expanded' // несжатый
            }
        ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 3 versions"],
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp",
                })
            )
        )
        // .pipe(groupCssMediaQueries())
        // .pipe(webpcss(
        //     {
        //         webpClass: ".webp",
        //         noWebpClass: ".no-webp",
        //     }
        // ))
        // .pipe(autoprefixer(
        //     {
        //         grid: true,
        //         overrideBrowserslist: ["last 3 versions"],
        //         cascade: true
        //     }
        // ))
        // Раскомментировать если нужен не сжатый дубль файла стилей
        .pipe(app.gulp.dest(app.path.build.css))
        // .pipe(app.gulp.dest(app.path.build.css, {sourcemaps: true}))
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename(
            {
                extname: ".min.css"
            }
        ))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}
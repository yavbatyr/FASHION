import { configFTP } from '../config/ftp.js';
import vinyFTP from 'vinyl-ftp';
import util from 'gulp-util'; 

export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinyFTP.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FTP",
                message: "Error: <%= error.message %>"
            }))
        )
    .pipe(ftpConnect.dest(`/public_html`)); // /${app.path.ftp}/${app.path.rootFolder} Отправка статического имени папки вместо динамического имени файлов
}

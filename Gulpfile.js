const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const { exec } = require('child_process');
 
function resizeImages() {
  gulp.src('_images/*')
    .pipe(imageResize({
      width : 300,
      height : 300,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('images/thumb'));
  gulp.src('_images/*')
    .pipe(imageResize({
      width : 1366,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('images/large'));
}

function optimizeImages() {
  gulp.src(['_images/*', 'images/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('images'));
}

function buildJekyll() {
  exec('bundle exec jekyll build --config _config.yml,_config_firebase.yml', (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.log('Error', err);
      return;
    }
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}

gulp.task('resize_images', () => resizeImages());
gulp.task('optimize_images', () => optimizeImages());
gulp.task('images', ['resize_images', 'optimize_images'], () => {});

gulp.task('default', ['images'], () => {});

gulp.task('build', ['images'], () => {
  buildJekyll();
});

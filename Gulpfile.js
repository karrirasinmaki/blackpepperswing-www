const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const { exec } = require('child_process');
 
function resizeImages() {
  return gulp.src('_images/*')
    .pipe(imageResize({
      width : 300,
      height : 300,
      crop : true,
      upscale : false,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/thumb'))

    .pipe(imageResize({
      width : 1366,
      crop : false,
      upscale : false,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/large'));
}

function optimizeImages() {
  return gulp.src(['_images/*', 'images/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('images'));
}

function buildJekyll(extraparams) {
  extraparams = extraparams || '';
  exec('bundle exec jekyll build --incremental --config _config.yml' + extraparams, (err, stdout, stderr) => {
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

gulp.task('default', () => {
  console.log(`
  images - build images
  build - build all
  build-dev - build all for dev
  `);
});

gulp.task('images', ['resize_images', 'optimize_images'], () => {});

gulp.task('build', ['images'], () => {
  buildJekyll();
});

gulp.task('build-dev', ['images'], () => {
  buildJekyll(',_config_firebase.yml');
});

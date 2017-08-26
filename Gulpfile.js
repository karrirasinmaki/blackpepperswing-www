const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const { exec } = require('child_process');
const runSequence = require('run-sequence');

function resizeImagesThumb() {
  return gulp.src('_images/*')
    .pipe(imageResize({
      width : 300,
      height : 300,
      crop : true,
      upscale : false,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/thumb'));
}

function resizeImagesCover() {
  return gulp.src('_images/*')
    .pipe(imageResize({
      width : 1440,
      height : 716,
      crop : true,
      upscale : false,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/cover'));
}

function resizeImagesLarge() {
  return gulp.src('_images/*')
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

gulp.task('resize_images_thumb', () => resizeImagesThumb());
gulp.task('resize_images_large', () => resizeImagesLarge());
gulp.task('resize_images_cover', () => resizeImagesCover());

gulp.task('resize_images', ['resize_images_thumb', 'resize_images_large', 'resize_images_cover'], () => {});
gulp.task('optimize_images', () => optimizeImages());

gulp.task('default', () => {
  console.log(`
  images - build images
  build - build all
  build-dev - build all for dev
  `);
});

gulp.task('images', (cb) => {
  runSequence('resize_images', 'optimize_images', cb);
});

gulp.task('build-jekyll', () => {
  buildJekyll();
});

gulp.task('build', (cb) => {
  runSequence('images', 'build-jekyll', cb);
});

gulp.task('build-dev', ['images'], () => {
  buildJekyll(',_config_firebase.yml');
});

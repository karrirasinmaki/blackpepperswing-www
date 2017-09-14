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
      quality: 0.85,
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
      quality: 0.85,
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
      quality: 0.85,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/large'));
}

function optimizeImages() {
  return gulp.src(['_images/*', 'images/**/*'])
    .pipe(imagemin([
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest('images'));
}

function buildJekyll(env) {
  var buildline = 'bundle exec jekyll build --config _config.yml';
  if (env === 'production') {
    buildline = 'JEKYLL_ENV=production ' + buildline;
  }
  else if (env === 'development') {
    buildline = buildline + ',_config_firebase.yml';
  }
  else if (env === 'local') {
    buildline = buildline.replace('jekyll build', 'jekyll serve') + ',_config_dev.yml';
  }
  console.log(buildline);
  return exec(buildline, (err, stdout, stderr) => {
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
  buildJekyll('production');
});

gulp.task('build', (cb) => {
  runSequence('images', 'build-jekyll', cb);
});

gulp.task('build-dev', ['images'], () => {
  buildJekyll('development');
});

gulp.task('serve', () => {
  buildJekyll('local');
});

const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const { exec } = require('child_process');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');

function doExec(buildline) {
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

function resizeImagesThumb() {
  return gulp.src('_original_images/**/*')
    .pipe(plumber())
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
  return gulp.src('_original_images/**/*')
    .pipe(plumber())
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
  return gulp.src('_original_images/**/*')
    .pipe(plumber())
    .pipe(imageResize({
      width : 1366,
      crop : false,
      upscale : false,
      quality: 0.85,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/large'));
}

function resizeImagesMedium() {
  return gulp.src('_original_images/**/*')
    .pipe(plumber())
    .pipe(imageResize({
      width : 620,
      crop : false,
      upscale : false,
      quality: 0.85,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/medium'));
}

function resizeImagesSmall() {
  return gulp.src('_original_images/**/*')
    .pipe(plumber())
    .pipe(imageResize({
      width : 320,
      crop : false,
      upscale : false,
      quality: 0.75,
      imageMagick: true
    }))
    .pipe(gulp.dest('images/small'));
}

function optimizeImages() {
  return gulp.src(['_original_images/**/*', 'images/**/*'])
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.jpegtran({ progressive: true })
    ]).on('error', (e) => {
      console.warn(e)
    }))
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
    buildline = buildline.replace('jekyll build', 'jekyll serve') + ',_config_dev.yml --watch';
  }
  return doExec(buildline);
}

gulp.task('resize_images_thumb', () => resizeImagesThumb());
gulp.task('resize_images_large', () => resizeImagesLarge());
gulp.task('resize_images_medium', () => resizeImagesMedium());
gulp.task('resize_images_small', () => resizeImagesSmall());
gulp.task('resize_images_cover', () => resizeImagesCover());

gulp.task('resize_images', gulp.series(
  gulp.parallel(
    'resize_images_thumb',
    'resize_images_large',
    'resize_images_medium',
    'resize_images_small',
    'resize_images_cover'
  )
));

gulp.task('default', (cb) => {
  console.log(`
  install - install bundle
  images - build images
  build - build all
  build-lightweight - lightweight build (no image procesing)
  build-dev - build all for dev
  `);
  cb();
});

gulp.task('install', () => {
  return doExec('bundle install --jobs=4 --retry=3 --path ./vendor/bundle');
});

gulp.task('images', gulp.series('resize_images', (cb) => {
  cb();
}));

gulp.task('build-jekyll', (done) => {
  return buildJekyll('production');
});

gulp.task('build', gulp.series('images', 'build-jekyll', (cb) => {
  cb();
}));

gulp.task('build-lightweight', (cb) => {
  gulp.series('build-jekyll', cb);
});

gulp.task('build-dev', gulp.series('images', () => {
  return buildJekyll('development');
}));

gulp.task('serve', () => {
  return buildJekyll('local');
});

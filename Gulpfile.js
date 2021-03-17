const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const { exec, spawn1 } = require('child_process');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');

const spawn = (function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    return mySpawn;
})();

function doExec(buildline, done=null) {
  console.log(buildline);
  let cmd = buildline.split(' ');
  let child = spawn(cmd.shift(), cmd);
  child.stdout.on('data', (data) => console.log(data.toString()));
  child.stderr.on('data', (data) => console.log(data.toString()));
  if (done) {
    child.on('exit', () => {
      done();
    });
  }
  return child
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

function buildJekyllCmd(env) {
  var buildline = 'bundle exec jekyll build --config _config.yml';
  if (env === 'production') {
    buildline = 'JEKYLL_ENV=production ' + buildline;
  }
  else if (env === 'development') {
    buildline = buildline + ',_config_firebase.yml';
  }
  else if (env === 'local') {
    buildline = buildline.replace('jekyll build', 'jekyll serve') + ',_config_dev.yml --host 0.0.0.0 --watch --trace --livereload --livereload-port 9005 --incremental';
  }
  return buildline;
}

gulp.task('resize_images_thumb', () => resizeImagesThumb());
gulp.task('resize_images_large', () => resizeImagesLarge());
gulp.task('resize_images_medium', () => resizeImagesMedium());
gulp.task('resize_images_small', () => resizeImagesSmall());
gulp.task('resize_images_cover', () => resizeImagesCover());

gulp.task('resize_images', gulp.parallel(
  'resize_images_thumb',
  'resize_images_large',
  'resize_images_medium',
  'resize_images_small',
  'resize_images_cover', (done) => {
    done();
  }));

gulp.task('default', (done) => {
  console.log(`
  install - install bundle
  images - build images
  build - build all
  build-lightweight - lightweight build (no image procesing)
  build-dev - build all for dev
  serve - serve localhost
  `);
  done();
});

gulp.task('install', (done) => {
  doExec('bundle install --jobs=4 --retry=3 --path ./vendor/bundle', done);
});

gulp.task('images', gulp.series('resize_images', optimizeImages, (done) => {
  done();
}));

gulp.task('build-jekyll', (done) => {
  doExec(buildJekyllCmd('production'), done);
});

gulp.task('build', gulp.series('images', 'build-jekyll', (done) => {
  done();
}));

gulp.task('build-lightweight', gulp.series('build-jekyll', (done) => {
  done();
}));

gulp.task('build-dev', gulp.parallel('images', (done) => {
  doExec(buildJekyllCmd('development'), done);
}));

gulp.task('serve', (done) => {
  doExec(buildJekyllCmd('local'), done);
});

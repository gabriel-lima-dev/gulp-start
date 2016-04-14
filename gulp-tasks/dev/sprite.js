module.exports = function(gulp, plugin, config) {
  return function () {
    var spriteData = gulp.src(config.source.imgSprite)
    .pipe(plugin.debug({ title: 'Create sprite image' }))
    .pipe(plugin.bytediff.start())
    .pipe(plugin.spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: '../images/sprite.png'
    }));
    spriteData.img.pipe(gulp.dest(config.dest.img));
    spriteData.css.pipe(gulp.dest(config.dest.scssSprite));

    return spriteData;
  };
};

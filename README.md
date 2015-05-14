# Gulp start
> A simple scaffolding project using Gulp. This will help you precompiling assets, managing dependencies and optimizing your work.

## Getting started
This project requires [Bower](http://bower.io/) and [Gulp](http://gulpjs.com/)

Run the **framework** install script of your choice:

+ laravel
+ magento
+ wordpress

`sh install/<framework>/install.sh`

## Usage

Defautl task `gulp` - precompile and copy files to dest folder: 

Dist task `gulp min` - minify `.css`, `.js` and images: 

Bump task `gulp bump` - tag versioning:  

You're good to go.

## Dependecies
[These are](https://bitbucket.org/gabrieldiv64/div64-skeleton/src/7bb8dde05cdc03fe60b89e7ff407306d329e06e7/DEPENDECIES.md?at=master) the dependencies and gulp plugins there will be used.

## Bower default components
Change your `.bower.json` with the dependencies of you nedd, also change the paths in `concat.js` task from gulp-tasks folder.

+ [JQuery](http://jquery.com/)
+ [Normalize CSS](http://necolas.github.io/normalize.css/)
+ [Parsley](http://parsleyjs.org/)

## License
Copyright (c) 2015 Gabriel Mateus Licensed under the MIT license.

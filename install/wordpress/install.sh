#!/bin/bash

# Vars
_pathJsonDir_src="./install/wordpress"
_pathJson_src="./install/wordpress/paths.json"
_pathJson_dest="./"
# Colors
light_purple='\033[1;35m'
light_red='\033[1;31m'
light_green='\033[0;32m'
gray='\033[1;30m'
no_color='\033[0m'

printf "INSTALLING WORDPRESS STRUCTURE \n"

# Project configurations
printf "${light_green}Project name (lowercase with no spaces):${no_color} "
read -r projectName

if [ -n "$projectName" ]; then
printf  "${light_green}Project description:${no_color} "
read -r projectDescription

mkdir -p "./src/code/"$projectName
mkdir -p "./src/schema/"$projectName
mkdir -p "./src/modules/"$projectName
mkdir -p "./src/locales/"$projectName
mkdir -p "./src/templates/"$projectName

# Package JSON
printf "${gray}Creating package.json${no_color}\n"
printf '{
  "name": "'$projectName'",
  "version": "0.1.0",
  "description": "'$projectDescription'",
  "repository": {
    "type": "git",
    "url": "https://bitbucket.org/div64/'$projectName'"
  },
  "authors": {
    "name": [ "" ],
    "email": [ "" ]
  },
  "license": "MIT",
  "devDependencies": {
    "gulp": "^3.8.11",
    "gulp-autoprefixer": "^2.1.0",
    "gulp-bump": "^0.3.0",
    "gulp-changed": "^1.2.1",
    "gulp-concat": "^2.5.2",
    "gulp-csso": "^1.0.0",
    "gulp-debug": "^2.0.1",
    "gulp-imagemin": "^2.2.1",
    "gulp-jshint": "^1.9.4",
    "gulp-load-plugins": "^0.8.1",
    "gulp-notify": "^2.2.0",
    "gulp-rename": "^1.2.0",
    "gulp-sass": "^1.3.3",
    "gulp-uglify": "^1.1.0",
    "gulp.spritesmith": "^3.3.1"
  },
  "dependencies": {
    "browser-sync": "^2.3.1"
  }
}' > $_pathJson_dest/package.json

# Npm install
printf "${gray}Installing NPM dependencies${no_color}\n"
if node -v > /dev/null; then
  npm install

  # Bower install
  printf "${gray}Installing Bower dependencies${no_color}\n"
  if bower -v > /dev/null; then
    bower install
  else
    printf 'You need to install Bower first'
    printf 'Run: npm install -g bower'
  fi
else
  printf "${light_red}You need to install/upgrade your Node.Js first${no_color}"
  printf "${light_red}I recommend NVM - Node Version Manager: https://github.com/creationix/nvm${no_color}"
fi

# Paths JSON
printf "${gray}Creating paths.json${no_color}\n"
printf '{
  "src":            "src/assets/",
  "src_js":         "src/assets/javascripts/",
  "src_scss":       "src/assets/stylesheets/scss/",
  "src_img":        "src/assets/images/",
  "src_sprite":     "src/assets/images/sprite/",
  "src_fonts":      "src/assets/fonts/",
  "src_vendor":     "src/assets/vendors/",
  "src_code":       "src/code/'$projectName'/",
  "src_schema":     "src/schema/'$projectName'/",
  "src_locales":    "src/locales/'$projectName'/",
  "src_modules":    "src/modules/'$projectName'/",
  "src_templates":  "src/templates/'$projectName'/",

  "dest_css":       "src/assets/",
  "dest_js":        "src/assets/javascripts/dest/",
  "dest_code":      "app/wp-content/themes/'$projectName'/code/",
  "dest_locales":   "app/wp-content/themes/'$projectName'/locales/",
  "dest_modules":   "app/wp-content/themes/'$projectName'/modules/",
  "dest_schema":    "app/wp-content/themes/'$projectName'/schema/",
  "dest_templates": "app/wp-content/themes/'$projectName'/templates/",

  "dist_js":        "app/wp-content/themes/'$projectName'/js/",
  "dist_css":       "app/wp-content/themes/'$projectName'/css/",
  "dist_img":       "app/wp-content/themes/'$projectName'/images/",
  "dist_fonts":     "app/wp-content/themes/'$projectName'/fonts/"
}' > $_pathJson_dest/paths.json

# Gulp tasks
printf "${gray}Running gulp tasks${no_color}\n"
gulp build
gulp watch

else
  printf "Hey, you forgot your project name!\n"
fi

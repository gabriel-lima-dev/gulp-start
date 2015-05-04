#!/bin/bash

# Black        0;30     Dark Gray     1;30
# Blue         0;34     Light Blue    1;34
# Green        0;32     Light Green   1;32
# Cyan         0;36     Light Cyan    1;36
# Red          0;31     Light Red     1;31
# Purple       0;35     Light Purple  1;35
# Brown/Orange 0;33     Yellow        1;33
# Light Gray   0;37     White         1;37

# Vars
_pathJsonDir_src="./install/laravel"
_pathJson_src="./install/laravel/paths.json"
_pathJson_dest="./"

# Colors
purple='\033[1;35m'
red='\033[1;31m'
green='\033[0;32m'
gray='\033[0;37m'
cyan='\033[0;36m'
white='\033[1;37m'
no_color='\033[0m'

printf "${green}INSTALLING LARAVEL STRUCTURE ${no_color}\n\n"

# Project configurations
printf "${green}? ${white}Project name (lowercase with no spaces):${no_color} ${cyan}$projectName"${no_color}
read -r projectName

if [ -n "$projectName" ]; then
printf "${green}? ${white}Project description:${no_color} ${cyan}$projectDescription${no_color}"
read -r projectDescription

# printf "${green}? ${white}Author:${no_color} ${cyan}$author${no_color}"
# read -r projectAuthor

# printf "${green}? ${white}Author email:${no_color} ${cyan}$authorEmail${no_color}"
# read -r projectAuthor

# printf "${green}? ${white}Repository URL:${no_color} ${cyan}$repositoryURL${no_color}"
# read -r repositoryURL

# printf "${green}? ${white}License:${no_color} ${cyan}$license${no_color}"
# read -r license

mkdir -p "./src/code/"$projectName
mkdir -p "./src/schema/"$projectName
mkdir -p "./src/modules/"$projectName
mkdir -p "./src/locales/"$projectName
mkdir -p "./src/templates/"$projectName

# Create Package JSON
printf "${gray}\nCreating package.json${no_color}\n"
printf '{
  "name": "'$projectName'",
  "version": "0.1.0",
  "description": "'$projectDescription'",
  "repository": {
    "type": "git",
    "url": "'$repositoryURL'"

  },
  "authors": {
    "name": [ "'$author'" ],
    "email": [ "'$authorEmail'" ]
  },
  "license": "'$license'",
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
    "del": "^1.1.1",
    "browser-sync": "^2.3.1",
    "merge-stream": "^0.1.7"
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
  printf "${red}You need to install/upgrade your Node.Js first${no_color}"
  printf "${red}I recommend NVM - Node Version Manager: https://github.com/creationix/nvm${no_color}"
fi

# Create Paths JSON
printf "${gray}Creating paths.json${no_color}\n\n"
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

  "dest_js":        "src/assets/javascripts/dest/",
  "dest_css":       "src/assets/stylesheets/css/",
  "dest_code":      "app/'$projectName'/code/",
  "dest_locales":   "app/'$projectName'/locales/",
  "dest_modules":   "app/'$projectName'/modules/",
  "dest_schema":    "app/'$projectName'/schema/",
  "dest_templates": "app/'$projectName'/templates/",

  "dist_js":        "app/public/js/",
  "dist_css":       "app/public/css/",
  "dist_img":       "app/public/images/",
  "dist_fonts":     "app/public/fonts/"
}' > $_pathJson_dest/paths.json

# Gulp tasks
printf "${gray}Running gulp tasks${no_color}\n"
gulp build
gulp watch

else
  printf "Hey, you forgot your project name!\n"
fi

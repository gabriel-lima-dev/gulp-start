#!/bin/bash

# Colors
purple='\033[1;35m'
red='\033[1;31m'
green='\033[0;32m'
gray='\033[0;37m'
cyan='\033[0;36m'
white='\033[1;37m'
no_color='\033[0m'

# Vars
_pathJson_dest="./"

printf "${green}INSTALLING MAGENTO STRUCTURE ${no_color}\n\n"

# Project configurations
printf "${green}? ${white}Project name (lowercase with no spaces):${no_color} ${cyan}$projectName"${no_color}
read -r projectName

if [ -n "$projectName" ]; then
printf "${green}? ${white}Project description:${no_color} ${cyan}$projectDescription${no_color}"
read -r projectDescription

# Cria estrutura de diretórios source, se não existirem.
if [ ! -d src/code ]; then
  mkdir -p src/code
fi

if [ ! -d src/schema ]; then
  mkdir -p src/schema
fi

if [ ! -d src/modules ]; then
  mkdir -p src/modules
fi

if [ ! -d src/locale ]; then
  mkdir -p src/locales
fi

if [ ! -d src/assets ]; then
  mkdir -p src/assets
fi

if [ ! -d src/templates ]; then
  mkdir -p src/templates
fi

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
    "gulp-combine-mq": "^0.4.0",
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
    "gulp-watch": "^4.2.4",
    "gulp.spritesmith": "^3.3.1"
  },
  "dependencies": {
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

else
  printf "Hey, you forgot your project name!\n"
fi

printf "
  ${white}Projeto inicializado.${no_color}
  - Configure os temas a serem observados em path.json
  - Crie a estrutura de diretórios dos novos temas com o install-themes.sh
  - Configure o proxy do seu localhost na tarefa do BrowserSync'

  ${cyan}Enjoy modafóquer!${no_color}
"

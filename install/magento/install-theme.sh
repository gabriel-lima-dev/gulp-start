#!/bin/bash

# Colors
red='\033[1;31m'
gray='\033[0;37m'
cyan='\033[0;36m'
green='\033[0;32m'
white='\033[1;37m'
no_color='\033[0m'
purple='\033[1;35m'
light_green='\033[1;32m'

# Vars
_pathJson_dest="./"
_pathAssetsTemplate="./install/assets/"

printf "${green}CREATING MAGENTO THEME ${no_color}\n\n"

# Theme configurations
printf "${green}? ${white}Theme name: ${cyan}$projectTheme"
read -r projectTheme

if [ -n "$projectTheme" ]; then
  mkdir -p "src/assets/"$projectTheme

  cp -r $_pathAssetsTemplate "src/assets/"$projectTheme

# Create Paths JSON
printf "\n${gray}Creating paths.json${no_color}\n"
printf '{
  "src_assets":       "src/assets/",
  "src_vendors":      "src/assets/vendors/",
  "src_templates":    "src/templates/",
  "src_modules":      "src/modules/",
  "src_locale":       "src/locale/",
  "src_code":         "src/code/",

  "dest_assets":       "app/skin/frontend/",
  "dest_vendors":      "app/lib/",
  "dest_templates":    "app/app/design/frontend/",
  "dest_modules":      "app/app/code/local/",
  "dest_modules_etc":  "app/app/etc/modules/",
  "dest_locale":       "app/app/locale/",
  "dest_code":         "app/",

  "dist_assets":       "dist/skin/frontend/",
  "dist_vendors":      "dist/lib/",
  "dist_templates":    "dist/app/design/frontend/",
  "dist_modules":      "dist/app/code/local/",
  "dist_locale":       "dist/app/locale/",
  "dist_code":         "dist/",

  "themes_dir": [
    "'$projectTheme'"
  ]
}' > $_pathJson_dest/paths.json

  # Gulp tasks
  printf "\n${gray}Running gulp tasks${no_color}\n"
  gulp
else
  printf "${red}Hey, you forgot the theme name!\n"
fi

printf "\n${white}One last thing...${no_color}
  - Add your themes in \"themes_dir\" in path.json.
  - Change browsersync proxy to your project url.
${cyan}That's all folks!${no_color}\n\n"

#!/bin/bash
echo "Installing Magento stuff, wait..."

# Vars
_pathJsonDir_src="./install/magento"
_pathJson_src="./install/magento/paths.json"
_pathJson_dest="./"
_etcModulesDir="./src/modules/etc/modules"

# Create $project directories
echo "Create template structure? Enter template name or press enter to ignore:"
read templateName

echo "Create module structure? Enter module name or press enter to ignore:"
read moduleName

rm -rf 

#templates
if [ ! -z "$templateName" ]
then
  designDir="./src/templates/"$templateName
  skinDir="./src/assets/"$templateName

  rm -rf $designDir/*
  rm -rf $skinDir/*

  mkdir -p $designDir/layout
  mkdir -p $designDir/template
  mkdir -p $designDir/locale
  touch $designDir/layout/local.xml

  mkdir -p $skinDir
  mv -f ./src/assets/* $skinDir
fi

# modules
if [ ! -z "$moduleName" ]
then
  set modulePath="$moduleName"
  echo $modulePath
  set modulePath=%modulePath:_=\/%
  echo $modulePath
  exit 0

  moduleDir="./src/modules/"$modulePath

  rm -rf $moduleDir

  mkdir -p $moduleDir/controllers
  mkdir -p $moduleDir/etc
  mkdir -p $moduleDir/Model
  mkdir -p $moduleDir/Helper
  mkdir -p $moduleDir/Block

  touch $moduleDir/etc/system.xml

  printf '<?xml version="1.0"?>
  <config>
    <modules>
      <'$moduleName'>
        <version>0.1.0</version>
      </'$moduleName'>
    </modules>
  </config>
  ' > $moduleDir/etc/config.xml

  if [ ! -d "$_etcModulesDir" ]
  then
    mkdir -p $_etcModulesDir
  fi

  printf '<?xml version="1.0"?>
  <config>
    <modules>
        <'$moduleName'>
            <active>true</active>
            <codePool>community</codePool>
        </'$moduleName'>
    </modules>
  </config>
  ' > $_etcModulesDir/$moduleName.xml
fi

exit 0

# Create paths.json
printf '{
  "root":           "./",
  "src":            "./src/assets/",
  "src_js":         "./src/assets/**/javascripts/",
  "src_scss":       "./src/assets/stylesheets/scss/",
  "src_img":        "./src/assets/images/",
  "src_sprite":     "./src/assets/images/sprite/",
  "src_fonts":      "./src/assets/fonts/",
  "src_vendor":     "./src/assets/vendors/",
  "src_code":       "./src/code/'$projectName'/",
  "src_schema":     "./src/schema/'$projectName'/",
  "src_locales":    "./src/locales/'$projectName'/",
  "src_modules":    "./src/modules/'$projectName'/",
  "src_templates":  "./src/templates/'$projectName'/",

  "dest_js":        "./src/assets/javascripts/dist/",
  "dest_css":       "./src/assets/stylesheets/css/",
  "dest_code":      "./app/'$projectName'/code/",
  "dest_locales":   "./app/'$projectName'/locales/",
  "dest_modules":   "./app/'$projectName'/modules/",
  "dest_schema":    "./app/'$projectName'/schema/",
  "dest_templates": "./app/'$projectName'/templates/",

  "dist_root":      "./app/'$projectName'/",
  "dist_js":        "./app/public/js/",
  "dist_css":       "./app/public/css/",
  "dist_img":       "./app/public/images/",
  "dist_vendor":    "./app/public/vendors/",
  "dist_fonts":     "./app/public/fonts/"
}' > $_pathJson_dest/paths.json

# Copy custom gulp task
_custom_gulptasks_src="./install/laravel/gulp-custom-tasks/*.js"
_custom_gulptasks_dest="./gulp-tasks/"

for f in $_custom_gulptasks_src; do
  cp $f $_custom_gulptasks_dest

  # Add tasks to gulpfile.js
  _task_filename=${f##*/}
  echo "gulp.task('${_task_filename%%.*}', getTask('${_task_filename%%.*}'));" >> gulpfile.js
done

# Gulp tasks
gulp build
gulp watch

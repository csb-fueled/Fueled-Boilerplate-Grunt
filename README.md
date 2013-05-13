# Fueled Boilerplate - Grunt

The Grunt Fueled Boilerplate works in exactly the same way as the standard Fueled Boilerplate apart from a couple
of differences.  One, the SCSS/CSS etc. directories are pre-configured so it's no longer required to run the `compass create <project> --bare --sass-dir "scss" --css-dir "css" --javascripts-dir "js" --images-dir "images"` command.

Second, a build script has been built which minifies JavaScript files, optimises images using SmushIt Optimises SVGs using SVGO, and delivers all 
of these files into a versioned /build folder which is ignored by git and only contains the required files to be
delivered on the server, css, images, js etc.

## Installation

You need the node package manager installed and you need grunt installed.  Follow [this guide](http://gruntjs.com/getting-started).  When you run the grunt script
if any dependancies are missing you'd most likely get an error saying 'x cannot be found' to install it's usually something along the lines of `npm install dependancy-name' you'll probably have to sudo it.

## Usage:

### Grunt Watch

Change directory into your project and run `grunt watch`.

`grunt watch` is the same as `compass watch` it's simply watching out for any changes to a .sass or .scss file, then compiling and compressing it into the 
/css directory.

### Grunt Build

When you're done on a project or ready to move it to a staging server you can easily create a production ready version.  Just run `grunt build` this will
move everything to a /build folder keeping the same directory structure but optimising images, svgs, minifying JS etc and just containing the files that 
should go to the server.


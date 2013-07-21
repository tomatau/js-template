This is used as a bower package named **tomatao.template** for setting up basic html, javascript libraries and css files used in tomatao's workflow

```
bower install tomatao.template
```

## Contents

Below is a list of the default contents:

**build**
The tools have been excluded to reduce download size for bower installations.

From the build directory you can simple run ```ant``` in the command line.
*	Ant build script to create publish directory 
	*	minimized JS, CSS, html & templates
	*	image optimisation
*	default configuration files and custom configuations

**css**
*	`_tomatao-reset.scss` a slightly customised version of normalise.css for including in the main style.scss
*	`_settings.sass` a group of SASS variables, functions, placeholders and mixins for colours and media sizes for including in files
*	`style.scss` The main stylesheet for the page with the reset included
*	`style.css` A compiled version of the SASS version for inclusion in the index.html 

**img** 
A directory containing a default `favicon.ico` image

**jasmine**
A library containing a jasmine config setup along with
*	The vendor's running
*	A custom runner modified to only show failing suites
*	a starting spec suite

To run these tests, use the `jasmine.html` contained in the root dir.

**media**
Empty directory to store non image media such as videos, sounds, etc...

**tmpl**
*	An empty directory for including template html files

`index.html`
This includes some very basic template for a HTML5 doctype ready for IE7 and above.  There is a requirejs file included with script.js as the main.

Also modernizr is included along with the main style.css file and a chromeframe taken from the html5boilerplate

`.htaccess`
A slightly customised version of the .htaccess file contained in the html5boilerplate

`humans.txt`
This is just to say thanks :)

`robots.txt`
Noting in here but there incase


## Javascript

The scripts contained in this file are for use with `backbone.marionette`.  The version numbers are included in all library files along with minified versions of both the AMD and non AMD compliant files for use with requireJS.


`Angular` Has also been included here for convenience

`jquery` plus a bunch of jquery plugins to be used at will and the jquery-ui

The `functions.js` file contains some convenience functions for development.  A view helper for backbone that should be taken out and set as a requirement for views when necessary as this requires the date.format script which is not always necessary.
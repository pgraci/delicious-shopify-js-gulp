# Delicious Shopify JS Gulp

Simple client side javascript app to publish Delicious Library to external sites.

![screenshot](http://ilovereggae.s3-website-us-east-1.amazonaws.com/2018/01/delicious-shopify.jpg "Screenshot")

This project is a work in progress!

This readme explains how to enable this on a Shopify page.

1. Setup project and install dependencies.
2. Export your XML and run included script to convert to a JSON file.
3. Generate a local development build and preview in your browser
4. Generate a minified production build, and add the code to your page

## Getting Started

Run the XML to JSON converter for Delicious Library exports.

### Prerequisites

Node.js https://nodejs.org

### Installing

Open terminal and cd to your desired working folder.

Clone this repo to your local system

```
git clone git@github.com:pgraci/delicious-shopify-js-gulp.git
```

Then cd into the new folder that is created

```
cd delicious-shopify-js-gulp
```

Run npm to install package dependencies

```
npm install
```

Export a new XML file from Delicious. You should replace the sample library.xml file with one that you export. (Only v3 libraries are supported at this time.)

However you will need to edit the xml file in a text editor, and delete the following line:

`<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">`

Save the library.xml file.

Run the node script to generate a JSON file from your Delicious Library export.

```
node exportXMLtoJSON.js
```

This should complete immediately, but may take longer depending on the size of your XML file.

Once completed, there will now be a library.json file in the `src/javascript` folder.

Now you can run the app to generate a local build

```
gulp
```

This will generate a development build of delicious.css and delicious.js, as well as copy over the index.html file to the `dist` folder (this folder is not committed to git). A server will be started, which you can hit at http://localhost:3000

Any changes to the SASS partial files or JS files will result in instant hot reloading via BrowserSync.

Now you can run the app to generate a production build

```
gulp production
```

This will generate compressed versions of the delicious.css and delicious.js files in the `dist` folder.

You can now upload these to Shopify into your assets folder.

* Note that our build process imports your JSON directly into the build file, so make sure your build is a reasonable size before uploading.

Now go into the Library page that you have created in Shopify, and add the following code:

```
{{ 'delicious.css' | asset_url | style_tag }}
{{ 'delicious.js' | asset_url | script_tag }}
```

Last but not least, we need to add the following HTML markup from our index.html file, to the Library page:

```
<div id="delicious-app" class="delicious-app">
	<div class="loader">
		Loading...
	</div>
</div>
```

## Authors

* **Phil Graci** http://philgraci.com

## Acknowledgments

Gulp tasks and SASS partial patterns based on this awesome @MadeInHaus boiler
https://github.com/MadeInHaus/react-flux-gulp-starter

exportXMLtoJSON code from https://github.com/marcghorayeb/delicious-library-xml2json

Sample library.xml file included is courtesy of Mark Hines @Realeyz for Likkle Shop NYC.

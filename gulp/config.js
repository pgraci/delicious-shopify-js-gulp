const dest = './dist';
const src = './src';

module.exports = {
    browserSync: {
        server: {
            baseDir: `${dest}`
        }
    },
    sass: {
        src: `${src}/sass/**/*.{sass,scss}`,
        dest: `${dest}`,
        settings: {
            /*
             * Required if you want to use SASS syntax
             * See https://github.com/dlmanning/gulp-sass/issues/81
             */
            sourceComments: 'map',
            imagePath: '/images' // Used by the image-url helper
        }
    },
    markup: {
        src: `${src}/**/*.html`,
        dest
    },
    browserify: {
        /*
         * A separate bundle will be generated for each
         * bundle config in the list below
         */
        bundleConfigs: [
            {
                entries: `${src}/javascript/delicious.js`,
                dest: `${dest}`,
                outputName: 'delicious.js',
                extensions: ['.js']
            }
        ]
    },
    production: {
        cssSrc: `${dest}/*.css`,
        jsSrc: `${dest}/*.js`,
        dest
    }
};

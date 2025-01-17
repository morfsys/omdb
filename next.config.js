const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
    withSass({
        cssModules: true,
        cssLoaderOptions: {
            url: false
        }
        // devIndicators: {
        //     autoPrerender: false
        // }
    })
);

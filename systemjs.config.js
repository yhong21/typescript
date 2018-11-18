(function (global) {
    System.config({
        baseURL: "/",
        defaultJSExtensions : true,
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            "jQuery" : "node_modules/jquery/dist/jquery.js"

        }

    });
})(this);
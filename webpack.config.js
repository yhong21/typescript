module.exports = {
    entry: "./jspackageusage.ts",
    output: {
        filename: "bundle.js"
    },
    module:{
        rules: [
            {test: /\.ts$/, loader:"ts-loader"}
        ]
    }
};
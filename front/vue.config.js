const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../back/public'),
    devServer: {
        proxy: {
            '/': {
                target: "http://localhost:3000"
            }
        }
    }
}
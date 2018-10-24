var webpack = require('webpack');
var WebpackDevServer = require ('webpack-dev-server');
var config = require ('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    hot: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,

    stats: {
        chunkModules: false,
        colors: true,
    },

    proxy: {
        '/api/**': { 
            target: 'http://localhost:3000/images',
            secure: false,
        }
    }

}).listen(3030, '0.0.0.0', function(err) {
    if (err) {
        console.error(err)
    }
    console.log('Listening on port 3030');
});

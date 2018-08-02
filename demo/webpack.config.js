const  path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const  ExtractTextPlugin = require('extract-text-webpack-plugin');
const  webpack = require('webpack');

const env = process.env.NODE_ENV;

let config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 9000,
        contentBase: path.resolve(__dirname, '/dist'),
        compress: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: './images/',
                        limit: 500,
                        publicPath: '../images'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: 'index.html'
        }),
        new ExtractTextPlugin('css/[name].[hash:8].css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};

if( env === "development" ){
    console.log("!!!!!PPPP")
}
console.log(env, '------env');
module.exports = config;
 


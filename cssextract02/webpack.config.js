var webpack = require('webpack');
var htmlwebpackplugin = require("html-webpack-plugin");
var ETP = require("extract-text-webpack-plugin");
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

// var CSS_PATH = path.resolve(ROOT_PATH,'css/a.css');


var commonsPlugins = new webpack.optimize.CommonsChunkPlugin('common.js?v=[hash:8]');

module.exports = {
  entry:{
    a:"./jsx/a.jsx",
    css:'css/a.css'
  },
  output:{
    path:'./a_build/',
    filename:'[name].js',
  },
  module:{
    loaders:[
      {  
        test: /\.css$/, 
        loader: ETP.extract("style-loader", "css-loader"),
        exclude: "/node_modules/"
      },
      {
        test: /.jsx?$/,
        loaders: ["react-hot","babel?presets[]=es2015&presets[]=react"],
        exclude: "/node_modules/",
        include: path.resolve(__dirname,'jsx')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.css']
    },
    devServer: {
    hot: true,
    port: 4000
  },
  plugins:[
    new ETP('style.css?v=[chunkhash:8]'),
    // new webpack.HotModuleReplacementPlugin(),
    // commonsPlugins,
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // }),
    new htmlwebpackplugin({
      title:"欢迎",
      filename: "index.html"
    })

  ]
}

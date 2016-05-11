var htmlwebpackplugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
	entry:{
		common:"./es6/index.js"
	},
	output:{
		path:'./es6_build/',
		filename:'[name].js',
	},
	module:{
		loaders:[
			{
				test: /.css$/,
				loaders: ['style','css'],
				exclude: "/node_modules/"
			},
			{
				test: /.js$/,
				loaders: ["babel-loader"],
				exclude: "/node_modules/",
				include: path.resolve(__dirname,'es6/')
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
		new htmlwebpackplugin({
			title:"欢迎es6",
			filename: "index.html",
			chunks:["common"]
		})
	]
}

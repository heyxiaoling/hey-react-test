var htmlwebpackplugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
	entry:{
		common:"./react/index.jsx"
	},
	output:{
		path:'./react_build/',
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
				test: /.jsx?$/,
				loaders: ["react-hot","babel?presets[]=es2015&presets[]=react"],
				// query:["es2015","react"],
				exclude: "/node_modules/",
				include: path.resolve(__dirname,'react/')
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

var htmlwebpackplugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
	entry:{
		life:"./life/jsx/life.jsx",
	},
	output:{
		path:'./life_build/',
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
				exclude: "/node_modules/",
				include: path.resolve(__dirname,'life')
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
			title:"Component specs and lifecycle",
			filename: "index.html",
			chunks:["life"]
		}),
	]
}

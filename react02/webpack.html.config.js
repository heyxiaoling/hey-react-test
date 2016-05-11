var htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
	entry:{
		common:"./res/js/index.js",
		abc:"./res/js/abc.js"
	},
	output:{
		path:'./build/',
		filename:'[name].js',
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:['style','css'],
				exclude:"/node_modules/"
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
			title:"欢迎",
			filename: "index.html",
			chunks:["common"]
		}),
		new htmlwebpackplugin({
			title:"欢迎abc",
			filename: "abc.html",
			chunks:["abc"]
		})
	]
}

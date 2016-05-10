module.exports = {
	entry:{
		common:"./res/js/index.js"
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
}

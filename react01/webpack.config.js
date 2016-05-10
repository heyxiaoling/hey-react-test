var path = require('path');


module.exports={
	entry: {
		app:path.resolve(__dirname,'app/app.js')
	},
	output: {
		path: path.resolve(__dirname,'build'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				}
			}
		]
	}	
}

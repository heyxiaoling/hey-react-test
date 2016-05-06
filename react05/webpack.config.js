var webpack = require('webpack')
module.exports = {
	entry: {
		index: './res/jsx/index.jsx',
		props: './res/jsx/props.jsx',
	},
	output: {
		path: __dirname + '/res/js',
    	publicPath: "/res/js",
		filename: '[name].js',
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("common.js")
	],
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader',
			}
		]
	}
}
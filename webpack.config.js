var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/js/App.js',
	output: {
		path: path.resolve('build/app/'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './build/app/',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, 
				{
			    test: /\.(png|jpg)$/,
			    loader: 'url-loader?limit=10000'
			}
	 ]
	}
};
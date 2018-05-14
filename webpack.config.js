var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	module: {
	  	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		{
			test: /\.(css|less)$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
		}
	  	]
	},
	resolve: {
	  	extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	},
	node: {
		net: 'empty',
		tls: 'empty',
		fs: 'empty',
		dns: 'empty'
	}
};

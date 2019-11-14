module.exports = {
	entry: [
		'./src/index.js'
	],
	mode: 'production',
	module: {
	  	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/
		},
	  	]
	},
	resolve: {
	  	extensions: ['.js', '.jsx']
	},
	output: {
		path: __dirname ,
		publicPath: '/',
		filename: 'index.js'
	}
};

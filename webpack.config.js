const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'docs')
	},
	plugins: [
		new UglifyJSPlugin()
	],
	module: {
        loaders:[
        	{
        		test: /\.(jpe?g|png|gif|svg)$/i, 
        		loader: "file-loader"
        	},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader?importLoaders=1!postcss-loader',
			},
			{
	            test: /\.(scss|sass)$/i,
	            loaders: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"]
	        }]
    },
    resolve: {
	    alias: {
	       handlebars: 'handlebars/dist/handlebars.runtime.min.js'
	    }
	}
};

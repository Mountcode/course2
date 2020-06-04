const path = require('path'); 
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');

module.exports ={
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './js/scripts.js',
		// vue: './src/js/vue.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist/js'),
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules:[
			{
				test: /\.css$/,
				use:['style-loader','css-loader']
			}
		]
	}
}




// let conf = { 
// 	devServer:{ 
// 		overlay: true,
// 	},
// 	module:{
// 		rules:[
// 			{
// 				test: /\.html$/i,
// 				use: 'raw-loader',
// 			},
// 			{
// 				test: /\.js$/,
// 				loader: 'babel-loader',
// 				// exclude: 'node_modules'
// 			},
// 			{
// 				test: /\.css$/,
// 				use:[
// 					'style-loader',
// 					'css-loader',
// 				]
// 			}
// 		]
// 	}
// };


// module.exports = (env, options) => {
// 	conf.devtool = options.mode === "production" ?
// 								 false:
// 								 "eval-cheap-module-source-map";
// 	return conf;
// };
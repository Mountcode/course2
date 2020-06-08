const path = require('path'); 
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');
// const CopyWebpackPlugin =  require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './js/scripts.js',
		// vue: './js/vue.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist/js'),
	},
	resolve:{
		extensions: ['.js','.json','.png','.css'],
		alias:{
			'@node_modules': path.resolve(__dirname, 'node_modules'),
		}
	},
	optimization:{
		splitChunks:{
			chunks: 'all'
		}
	},
	devServer:{
		port: 4200
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
      patterns: [
					{ 
						from: path.resolve(__dirname, 'src/img/'),
						to: path.resolve(__dirname, 'dist/img')
					}
				],
		})
	],
	module: {
		rules:[
			{
				test: /\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.(png|jpg|svg"gif)$/,
				use:['file-loader']
			},
			{
				test: /\.(ttf|woff|woff2|otf|eot)$/,
				use:['file-loader']
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
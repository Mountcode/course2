const path = require('path'); 
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');
const CopyWebpackPlugin =  require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev

const optimization = () =>{
	const config = {
		splitChunks:{
			chunks: 'all'
		}
	}
	if (isProd){
		config.minimizer = [
			new OptimizeCssAssetsPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config;
}

module.exports ={
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		// vue: './js/vue.js',
		main: './js/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, './dist/js'),
	},
	resolve:{
		extensions: ['.js','.json','.png','.css'],
		alias:{
			'@node_modules': path.resolve(__dirname, 'node_modules'),
		}
	},
	optimization:optimization(),
	devServer:{
		port: 4200,
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: './index.html',
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
      patterns: [
					{ 
						from: path.resolve(__dirname, 'src/img/'),
						to: path.resolve(__dirname, 'dist/img')
					}
				],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		})
	],
	module: {
		rules:[
			{
				test: /\.css$/,
				use:[
					{
						loader: MiniCssExtractPlugin.loader,
						options:{
							hmr:isDev,
							reload:true
						}
					},
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use:[
					{
						loader: MiniCssExtractPlugin.loader,
						options:{
							hmr:isDev,
							reload:true
						}
					},
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.s[ac]ss$/,
				use:[
					{
						loader: MiniCssExtractPlugin.loader,
						options:{
							hmr:isDev,
							reload:true
						}
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|svg"gif)$/,
				use:['file-loader']
			},
			{
				test: /\.(ttf|woff|woff2|otf|eot)$/,
				use:['file-loader']
			},
			{
				test: /\.js$/,
				exclude:/node-modules/,
				loader: 'babel-loader',
				// loader:{
				// 	loader: 'babel-loader',
				// 	options:{
				// 		presets:[
				// 			'@babel/preset-env'
				// 		]
				// 	}
				// }
			},
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
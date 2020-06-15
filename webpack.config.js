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
				test:  /\.(jpe?g|png|gif|ico)$/i,
				use:[{
					loader: "file-loader?name=[name].[hash].[ext]",
					options: {
							name: '[name].[ext]',
							outputPath: 'img/'
					}
				}]
			},
			{
					test: /\.(html)$/,
					loader: 'html-loader',
					options: {
						attributes: {
							list: [
								{
									tag: 'img',
									attribute: 'src',
									type: 'src',
								},
								{
									tag: 'img',
									attribute: 'data-src',
									type: 'src',
								},
								{
									tag: 'link',
									attribute: 'href',
									type: 'src',
								},
							],
					},
				},
			},
			{
				test: /\.(ttf|woff|woff2|otf|eot)$/,
				use:['file-loader']
			},
			{
				test: /\.js$/,
				exclude:/node-modules/,
				loader: 'babel-loader',
			},
		]
	}
}
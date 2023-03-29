const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = (env, argv) => {
	return {
		context: path.resolve(__dirname, './src'),
		entry: { app: './index.tsx' },
		output: {
			filename: '[name].[contenthash].bundle.js',
			chunkFilename: '[name].[contenthash].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		devtool: 'source-map',
		resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
		module: {
			rules: [
				{ test: /\.tsx?$/, loader: 'ts-loader'},
				{ test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
				{
					test: /\.(css|scss|sass)$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									ident: 'postcss',
									plugins: [tailwindcss, autoprefixer],
								},
							},
						},
					],
				},
				{
					test: /\.(png|jpg|gif)$/,
					type: 'asset/resource'
				}
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: 'styles/[name].[contenthash].css',
				chunkFilename: '[id].[contenthash].css',
			}),	
			new HtmlWebpackPlugin({
				template: "./index.html",
				title: 'Mithril TSX Template',
				filename: "index.html",
				chunksSortMode: "manual",
				chunks: ['vendors', 'app'],
				favicon: 'favicon.ico'
			}),
			new webpack.DefinePlugin({
				// define environment vars here
			})
		],
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
				}
			},
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						output: {
							comments: false
						}
					}
				}),
			]
		}
	}
}

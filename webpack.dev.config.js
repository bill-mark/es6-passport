const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//import "babel-polyfill";
require("babel-polyfill")

module.exports = {
	entry:['babel-polyfill','./src/index.js'],
	output:{
		path:__dirname,
		filename:'./release/bundle.js'
	},
	module:{
      rules:[{
      	test:/\.js?$/,
      	exclude:/(node_modules)/,
      	loader:'babel-loader'
      }]
	},
	plugins:[
      new HtmlWebpackPlugin({
      	template:'./index.html'
      })
	],
	devServer:{
		contentBase:path.join(__dirname,'./release'),
		open:true,
		port:9002,
	}
}
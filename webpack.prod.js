const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");

const htmlPlugin = new HtmlWebpackPlugin({
  template:'./src/index.html',
  filename:'index.html'
})


module.exports={
  mode:'production',
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader'],
        exclude:/node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    
    ],
  },

  plugins:[
    htmlPlugin,
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),

  ],
  output:{
    clean:true,
  }

}
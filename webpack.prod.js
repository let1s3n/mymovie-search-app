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
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
    }),

  ],
  output:{
    clean:true,
  }

}
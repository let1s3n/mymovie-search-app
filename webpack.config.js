const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template:'./src/index.html',
  filename:'index.html'
})

const Dotenv = require('dotenv-webpack');
module.exports={
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
    new Dotenv()

  ],
  output:{
    clean:true,
  },

}
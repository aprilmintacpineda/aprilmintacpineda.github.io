import path from 'path';
import extractTextWebpackPlugin, { extract } from 'extract-text-webpack-plugin';

export default [
  {
    name: 'SASS',
    entry: path.join(__dirname, 'src/styles/index.sass'),
    output: {
      filename: 'app.css',
      path: path.join(__dirname, 'build')
    },
    module: {
      loaders: [
        {
          test: /\.sass/,
          loader: extract({
            use: 'css-loader!postcss-loader!sass-loader',
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [
      new extractTextWebpackPlugin('app.css')
    ]
  }
];
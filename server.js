const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var path = require('path');

// const html = require('./main.pug');


const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/main', function(req, res){
  res.render('main');
});
app.get('/color', function(req, res){
  res.render('color');
});
app.get('/font', function(req, res){
  res.render('font');
});

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
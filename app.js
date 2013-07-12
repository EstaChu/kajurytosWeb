//##### App main setting
var express = require('express');
var app = express();

app.set('views',__dirname + '/templates');
app.set('view engine', 'jade');

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/static'));

//##### App main route dispatcher logic
app.get('/', function(req, res){
    res.render('spawn');
});

app.get('/servidor', function(req, res){
    res.render('servidor');
});

app.get('/normas', function(req, res){
    res.render('normas');
});

//##### 404 Responser
app.use(function(req, res, next){
    res.send(404, '404');//res.render('404'));
});

//##### Socket listener
app.listen(8000);
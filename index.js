var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.text()); // support txt encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/coffee', function(req, res){
    //res.setHeader("Access-Control-Allow-Origin", "*");
    //var data = req.body.Message
    console.log('+*-*-*-*-*-*-*-*-+');
    console.log(req.body);
    console.log('+++*-*-*-*-**-*-*=+');
    res.status(200).json();
});

app.listen(process.env.PORT || 8081);
exports = module.exports = app;

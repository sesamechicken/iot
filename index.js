var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var querystring = require('querystring');
var request = require('request');

app.use(bodyParser.text()); // support txt encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/coffee', function(req, res){
    //res.setHeader("Access-Control-Allow-Origin", "*");
    //var data = req.body.Message
    console.log('+*-*-*-*-*-*-*-*-+');
    var json = JSON.parse(req.body);
	  var msg = json.Message
    console.log('untouched msg -----> ', msg);
    var hipchat = "https://fusionallianceinc.hipchat.com/v2/room/3157291/notification?auth_token=f8NgPgVMLYqwSmH5OsUHkCRegojDE4Y3kMT7vt1U";
    var msg_body = '(coffee) ' + msg
    console.log(msg);
    var notification = {color:"green",message:msg_body,notify:true,message_format:"text"};
    console.log('+++*-*-*-*-**-*-*=+');
    request.post(
        hipchat,
        { json: notification },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
    res.status(200).json();
});

app.listen(process.env.PORT || 8081);
exports = module.exports = app;

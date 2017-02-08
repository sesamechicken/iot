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
    console.log('+*-*-*-* MAIN APP -*-*-*-*-+');
    var json = JSON.parse(req.body);
    console.log(json);
	  var msg = json.Message
    console.log('untouched msg -----> ', msg);

    // Kroger Multi Dev room
    //var hipchat = "https://fusionallianceinc.hipchat.com/v2/room/3157291/notification?auth_token=f8NgPgVMLYqwSmH5OsUHkCRegojDE4Y3kMT7vt1U";

    // CVG Digital Team
    var hipchat = "https://fusionallianceinc.hipchat.com/v2/room/1202611/notification?auth_token=8xHwQ2CsBvQOfYc1oEIMb8NUU5JnyuPLJl9h4G7k"

    var msg_body = '(coffee) ' + msg
    console.log(msg);
    var notification = {color:"green",message:msg_body,notify:true,message_format:"text"};
    console.log('+++*-*- END MAIN APP *-*-**-*-*=+');
    request.post(
        hipchat,
        { json: notification },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('fom the request.post call ' + body)
            }
        }
    );
    res.status(200).json();
});

app.listen(process.env.PORT || 8081);
exports = module.exports = app;

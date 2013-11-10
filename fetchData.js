var http = require('http');
var https = require('https');

var url = 'https://www.okcoin.com/api/ticker.do?symbol=ltc_cny';

function getJSON (url, callback) {

    var prot = url.charAt(4) == 's' ? https : http;
    var req = prot.get(url, function(resp) {
        var output = '';
        resp.setEncoding('utf8');

        resp.on('data', function (chunk) {
            output += chunk;
        });

        resp.on('end', function() {
            callback(resp.statusCode, output);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

getJSON(url, function(status, data) {
    console.log(data)
})



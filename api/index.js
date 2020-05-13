var request = require('request');
var express = require('express');
var md5 = require('md5-node');
var app = express();

module.exports = (req, res) => {
  	var url = 'https://mpay.ximalaya.com/mobile/track/pay/'+req.query.id+'?device=pc&isBackend=true&_='+Date.now();
    var cookie = '_xmLog=xm_k9a0xy9ysj4k4p; 1&remember_me=y; 1&_token=204709552&31B92E42A4F8446E85B226EE5A7694ADNdV09F1DCB6A5BC53204EDE97232C21B9A13437F7812B40A8A593C328954BA55030; x_xmly_traffic=utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A; Hm_lvt_4a7d8ec50cfd6af753c4f8aee3425070=1588318846,1588400664,1588573395,1589352175; Hm_lpvt_4a7d8ec50cfd6af753c4f8aee3425070=1589352571';
    request({
        url: url,
        method: "GET",
        json: true,
        headers: {
            "Host": "mpay.ximalaya.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
            "xm-sign": 'xm_md5',
            "cookie": cookie             
        },
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
}
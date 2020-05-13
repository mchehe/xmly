var request = require('request');
var express = require('express');
var md5 = require('md5-node');
var app = express();

module.exports = (req, res) => {

	var url = "https://www.ximalaya.com/revision/time"
        var option ={
          url: url,
          headers: {
              'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Safari/537.36',
              'Host': 'www.ximalaya.com'
          }
        }
        request(option, function(error, response, body) {
          if (!error && response.statusCode == 200) {
          	const { name = body } = req.query
  			res.status(200).send(`Hello ${name}!`)
              // resolve(md5("himalaya-"+body)+"("+parseInt(Math.random()*(100+1),10)+")"+body+"("+parseInt(Math.random()*(100+1),10)+")"+Date.now())
          }
        });
}
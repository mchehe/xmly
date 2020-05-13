var request = require('request');
var express = require('express');
var md5 = require('md5-node');
var app = express();


var request = require('request');
var express = require('express');
var md5 = require('md5-node');
var app = express();

function vt(t, e) {
    for (var n, r = [], o = 0, i = "", a = 0; 256 > a; a++)
        r[a] = a;
    for (a = 0; 256 > a; a++)
        o = (o + r[a] + t.charCodeAt(a % t.length)) % 256,
            n = r[a],
            r[a] = r[o],
            r[o] = n;
    for (var u = o = a = 0; u < e.length; u++)
        o = (o + r[a = (a + 1) % 256]) % 256,
            n = r[a],
            r[a] = r[o],
            r[o] = n,
            i += String.fromCharCode(e.charCodeAt(u) ^ r[(r[a] + r[o]) % 256]);
    return i
}
function mt(t) {
    this._randomSeed = t,
        this.cg_hun()
}
mt.prototype = {
    cg_hun: function () {
        this._cgStr = "";
        var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890"
            , e = t.length
            , n = 0;
        for (n = 0; n < e; n++) {
            var r = this.ran() * t.length
                , o = parseInt(r);
            this._cgStr += t.charAt(o),
                t = t.split(t.charAt(o)).join("")
        }
    },
    cg_fun: function (t) {
        t = t.split("*");
        var e = ""
            , n = 0;
        for (n = 0; n < t.length - 1; n++)
            e += this._cgStr.charAt(t[n]);
        return e
    },
    ran: function () {
        return this._randomSeed = (211 * this._randomSeed + 30031) % 65536,
            this._randomSeed / 65536
    },
    cg_decode: function (t) {
        var e = ""
            , n = 0;
        for (n = 0; n < t.length; n++) {
            var r = t.charAt(n)
                , o = this._cgStr.indexOf(r);
            -1 !== o && (e += o + "*")
        }
        return e
    }
};
// var gt = vt("xm", "test")
var gt = vt("xm", "Ä[ÜJ=Û3Áf÷N")
    , bt = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]
    , wt = function (t) {
        var e = vt(function (t, e) {
            for (var n = [], r = 0; r < t.length; r++) {
                for (var o = "a" <= t[r] && "z" >= t[r] ? t[r].charCodeAt() - 97 : t[r].charCodeAt() - "0".charCodeAt() + 26, i = 0; 36 > i; i++)
                    if (e[i] == o) {
                        o = i;
                        break
                    }
                n[r] = 25 < o ? String.fromCharCode(o - 26 + "0".charCodeAt()) : String.fromCharCode(o + 97)
            }
            return n.join("")
        }("d" + gt + "9", bt), function (t) {
            if (!t)
                return "";
            var e, n, r, o, i, a = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
            for (o = (t = t.toString()).length,
                r = 0,
                i = ""; r < o;) {
                do {
                    e = a[255 & t.charCodeAt(r++)]
                } while (r < o && -1 == e); if (-1 == e)
                    break;
                do {
                    n = a[255 & t.charCodeAt(r++)]
                } while (r < o && -1 == n); if (-1 == n)
                    break;
                i += String.fromCharCode(e << 2 | (48 & n) >> 4);
                do {
                    if (61 == (e = 255 & t.charCodeAt(r++)))
                        return i;
                    e = a[e]
                } while (r < o && -1 == e); if (-1 == e)
                    break;
                i += String.fromCharCode((15 & n) << 4 | (60 & e) >> 2);
                do {
                    if (61 == (n = 255 & t.charCodeAt(r++)))
                        return i;
                    n = a[n]
                } while (r < o && -1 == n); if (-1 == n)
                    break;
                i += String.fromCharCode((3 & e) << 6 | n)
            }
            return i
        }(t)).split("-")
            , n = e
            // , n = tt(e, 4)
            , r = n[0];
return {
    sign: n[1],
    buy_key: r,
    token: n[2],
    timestamp: n[3]
}
    }

function get_sign_token_etc(ep){
    return wt(ep);
}

function get_player_url(res){
    // var res = JSON.parse(res)
    var domain = res['domain'] +'/download/'+res['apiVersion'];
    var seed = res['seed'];
    var fileId = res['fileId'];
    var ep = res['ep'];
    var duration = res['duration'];
    var n = new mt(seed).cg_fun(fileId);
    var address = "/" === n[0] ? n : "/".concat(n);
    var params = get_sign_token_etc(ep);
    return domain + address +'?sign='+params['sign'].toString()+'&buy_key='+params['buy_key']+'&token='+params['token']+'&timestamp='+params['timestamp']+'&duration='+duration
}

function xm_md5(){
    return new Promise((resolve, reject)=>{
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
              resolve(md5("himalaya-"+body)+"("+parseInt(Math.random()*(100+1),10)+")"+body+"("+parseInt(Math.random()*(100+1),10)+")"+Date.now())
          }
        });
    });
};

module.exports = (req, res) => {
	var ok='{"ret":0,"msg":"0","trackId":227985666,"uid":134944915,"albumId":30736201,"title":"都市最强仙帝027集阴鬼宗再现","domain":"http://audiopay.cos.xmcdn.com","totalLength":10274310,"sampleDuration":180,"sampleLength":1562130,"isAuthorized":true,"apiVersion":"1.0.0","seed":6367,"fileId":"18*13*43*50*31*61*59*60*67*26*59*53*5*59*65*48*59*24*55*18*60*6*48*61*51*3*49*62*18*14*47*56*7*53*9*21*1*40*46*64*43*39*64*60*67*0*44*16*30*38*41*","buyKey":"617574686f72697a6564","duration":1269,"ep":"20NvOoh6T39X3qwKO4cY5g5bVhg+hSPOT4QaeAq3WCurneyLjf7aybgHg/yJ3vIzCOUkgScYe6di3uz+xg0c2LYTPiBS","highestQualityLevel":1,"downloadQualityLevel":1,"authorizedType":1}';
	var ew= JSON.parse(ok);
	res.send(get_player_url(ew));
}
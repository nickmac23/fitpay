var express = require('express');
var router = express.Router();
var request = require('request')


var headers = {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2OWE5ZWNlZi1hYmI3LTRkOTItOTU3NS0zNWEyNzBiZDE3NTkiLCJzdWIiOiJHVW1za2t5VCIsImF1dGhvcml0aWVzIjpbInVzZXIucmVhZCIsInVzZXIud3JpdGUiLCJ1c2Vycy5yZWFkIiwidXNlcnMud3JpdGUiXSwic2NvcGUiOlsidXNlci5yZWFkIiwidXNlci53cml0ZSIsInVzZXJzLnJlYWQiLCJ1c2Vycy53cml0ZSJdLCJjbGllbnRfaWQiOiJHVW1za2t5VCIsImNpZCI6IkdVbXNra3lUIiwiYXpwIjoiR1Vtc2treVQiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjlmMTU2NWYyIiwiaWF0IjoxNDY4NjEyNzU2LCJleHAiOjE0Njg2NTU5NTYsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91YWEvb2F1dGgvdG9rZW4iLCJ6aWQiOiJ1YWEiLCJhdWQiOlsiR1Vtc2treVQiLCJ1c2VyIiwidXNlcnMiXX0.WQFP2UGPPyGkSwuXDeXlRhwMgEl8KjlnYNWIebwG72HBQHlGGtUBKT-8F4V5fuk0skm1OWyaW9R7eeaGP-xbHp8gfY3MMA0Fe_elRRjohzlMaXXyYtFRRx72WKlhm89f47mJUZ-SWZsrcs2Sf2oCMWAvldCcCJIfVa-IxdKocUdEA8sOScoV3M-Vna6vGCJsL5ymVdM7TvG_xppAK6vjR9JzPu5DKDhpRgWRStUlExi940eugg43vl1mnVq9IBwWYGoC7N44xWxxrWb-1cikB3eNHssIVO_J7mU-5_X4HspYa6-KDeq9lZFddPp1hJSSVof8-OkDdwQFN1alECr_tg'
};

var options = {
    url: `https://api.qa.fitpay.ninja/users?limit=5&offset=0`,
    headers: headers
};


/* GET home page. */
router.get('/', function(req, res, next) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.end(body)
    }
  })
});

router.post('/', function(req, res, next) {
  console.log('here');
  options.url = req.body.url
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.end(body)
    }
  })
});


module.exports = router;

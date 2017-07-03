var https = require('https');

var options = {
  host: 'www.example.com',
  path: '/'
};

//called by https when the request is made
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  })

  // console.log('response: ', response);
}
console.log('im about to make the request!')

https.request(options, callback).end();

console.log('ive made the request'); 
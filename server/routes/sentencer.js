var express = require('express');
var router = express.Router();
var Sentencer = require('sentencer');

router.get('/', function(req, res) {
  var sentence = Sentencer.make("Check out this {{ adjective }} pet {{ noun }}! " +
  "And, with a name like {{noun}}, you can absolutely expect that he can eat " +
  "{{ an_adjective }} {{ noun }}! Adopt this little bugger today and find " +
  "yourself happier than {{ an_adjective }} {{ noun }}!");

  console.log(sentence);

  res.send(sentence);
});//end route

module.exports = router;

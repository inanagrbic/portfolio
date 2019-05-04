var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

/* GET home page. */
router.get('/client-:id', function(req, res, next) {
  var id = req.params.id;
  if (id > 6) {
    res.status(404);
    res.sendFile('404.html', {root : __dirname + '/views'});
  } else {
    res.render('client', { path: 'images/client-'+id+'.png', next: (Number(id) + 1), prev: (Number(id) - 1), id: id });
  }
  
});

module.exports = router;

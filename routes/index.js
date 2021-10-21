var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET date page. */
/*router.get('/api/:date', function(req, res, next) {
  let dateString = req.params.date;
  console.log(typeof parseInt(dateString));
  console.log(typeof Date.now());

  if(parseInt(req.params.date) > 0 /*&& typeof parseInt(dateString) == Number*//*) {
    res.send({"unix": req.params.date, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"});
  }
  else {
    next();
  }
  
});*/

/* GET date page. */
router.get('/api/:year-:month-:day-:hour-:minute-:millisecond', function(req, res, next) {
  let dateString = req.params.date;
  console.log(dateString);
  console.log(Date.now().toDateString());

  if(parseInt(req.params.date) > 0 /*&& typeof parseInt(dateString) == Number*/) {
    res.send({"unix": req.params.date, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"});
  }
  else {
    next();
  }
  
});

module.exports = router;

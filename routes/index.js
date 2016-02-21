var config  = require('../config.json');
var express = require('express');
var router  = express.Router();
var createMap = require('../lib/createMap');
var determineAttitude = require('../lib/determineAttitude');
var objective = require('../lib/objective');
var pickDirection = require('../lib/pickDirection');
var findPath = ('../lib/findPath');
var pickTaunt = require('../lib/pickTanut');
var pickTarget = require('..lib/pickTarget');
var async = require('async');
// Handle GET request to '/'
router.get(config.routes.info, function (req, res) {
  // Response data
  var data = {
    color: config.snake.color,
    head_url: config.snake.head_url,
  };

  return res.json(data);
});

// Handle POST request to '/start'
router.post(config.routes.start, function (req, res) {
  // Do something here to start the game

  // Response data
  var data = {
    taunt: config.snake.taunt.start
  };

  return res.json(data);
});

// Handle POST request to '/move'
router.post(config.routes.move, function (req, res) {
  // Do something here to generate your move
  console.dir(req.body, {depth: null});

  //
  //Do All Stuff!!!!!!!!!!!!!!!
  //
  
  async.auto({
      createMap: createMap(callback),
      objective: objective(callback),
      determineAttitude: determineAttitude(callback),
      pathTarget:['createMap', 'objective', 'determineAttitude', pickTarget(callback, results)],
      findPath: ['pathTarget', findPath(callback, results)],
      pickDirection: ['pickTarget', pickDirection(callback, results)]
  }, function(err, results){
     // Response data
    var data = {
        move: results.pickDirection, // one of: ["north", "east", "south", "west"]
        taunt: pickTaunt()
    };

    return res.json(data); 
  });
});

// Handle POST request to '/end'
router.post(config.routes.end, function (req, res) {
  // Do something here to end your snake's session

  // We don't need a response so just send back a 200
  res.status(200);
  res.end();
  return;
});


module.exports = router;

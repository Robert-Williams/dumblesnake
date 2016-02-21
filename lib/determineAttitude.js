var determineAttitude = function(callback, result){
  var id = 0;
  var health = 0;
  var gold = 0;

  var mySnake = 0;
  var snakes = req.body.snakes;
  for(var i = 0; i < snakes.length; i++){
    if(snakes[i].id === id){
      mySnake = snakes[i];
    }
  }

  health = mySnake.health;

  var attitude = "";
  if(health > 70){
    attitude = "greedy";
  } else if (health < 70 && health > 40){
    attitude = "peckish";
  } else if (health < 40){
    attitude = "starving";
  } else {
    attitude = "starving";
  }
  callback(null, attitude);
};

module.exports = determineAttitude;

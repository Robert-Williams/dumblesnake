var determineAttitude = function(callback){
  var id = '441541c2-6682-4e78-a9c2-3d91e0abe5d0';
  var health = 0;
 // var gold = 0;

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

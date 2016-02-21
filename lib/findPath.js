var findPath = function(data){
  var map = data; //TODO
  var location = [];     //TODO
  var goal = [];   //TODO
  var id = "";    //TODO
  var snakes = req.body.snakes;
  for(var i = 0; i < snake.length; i++){
    if(snakes[i] == id){
      location = snakes[i].coords[0];
    }
  }

  var grid = new PF.Grid(map);
  var finder = new PF.AStarFinder();

  var path = finder.findPath(location[0], location[1], goal[0], goal[1], grid);

  callback(null, path[0]); //Send desired location to next method
};


module.exports = findPath;

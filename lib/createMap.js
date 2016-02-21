var createMap = function(callback){
    
    var width = req.body.width;
    var height = req.body.height;
    var snakes = req.body.snakes;
    var walls = req.body.walls;
    var id = '441541c2-6682-4e78-a9c2-3d91e0abe5d0';
    
    
    
    //create empty map
    var map = new Array(height);
    for(var i = 0; i < map.length; i++){
        map[i] = new Array(width);
    }
    
    //initialize map
    for(var row = 0; row < map.length; row++){
        for(var col = 0; col < map[row].length; col++){
            map[row][col] = 0;
        }
    }
    
    //add walls
    if(walls.length > 0){
        for(var w = 0; w < walls.length; w++){
            var wallSection = walls[w];
            var wx = wallSection[0];
            var wy = wallSection[1];
            map[wy][wx] = 1;
        }
    }
    
    //add snakes
    if(snakes.length > 0){
        for(var s = 0; s < snakes.length; s++){
            //
            var snake = snakes[s];
            //add body parts
            for(var sb = 0; sb < snake.coords.length; sb++){
                var coord = snake.coords[sb];
                var x = coord[0];
                var y = coord[1];
                
                map[y][x] = 1;
            }
        }
        
        //Clean friendly snake head
        if(snake.id === id){
            var snakeHead = snake.coords[0];
            var shx = snakeHead[0];
            var shy = snakeHead[1];
            map[shy][shx] = 0;
        }
    }
    
    callback(null, map);
};

module.exports = createMap;
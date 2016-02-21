var calcDistance = require('./calcDistance');

var objective = function(callback){
   var objectives = [];
   var coin = req.body.gold;
   var food = req.body.food;
   var snakes = req.body.snakes;
   var id = '441541c2-6682-4e78-a9c2-3d91e0abe5d0';
   
   var safePoint = {
       score: 0,
       type: 'f',
       coord: [0, 0]
   };
   
   objectives.push(safePoint);
   
   //Score the coin if it exists
   if(coin.length > 0){
       var money = {};
       //friendly distance
       var fd = 1000;
       var ed = 1000;
       money.type = 'g';
       money.coord = coin[0];
       
       for(var s = 0; s < snakes.length; s++){
           var snake = snakes[s];
           console.log(snake.coords[0]);
           console.log(coin[0]);
           var distance = calcDistance(snake.coords[0], coin[0]);
           console.log('coin distance' + distance);
           //frinedly snake
           if(snake.id === id){
               fd = distance;
           }
           //unfriendly snake
           else{
               if(distance < ed){
                   ed = distance;
               }
           }
       }
       
       console.log('fd: ' + fd + ' ed: ' + ed);
       
       money.score = (fd - ed);
       objectives.push(money);
   }
   
   //Score the food if it exists
   if(food.length > 0){
       for(var f = 0; f < food.length; f++){
           var foodItem = {};
           foodItem.type = 'f';
           foodItem.coord = food[f];
           var fd = 1000;
           var ed = 1000;
           
           for(var s = 0; s < snakes.length; s++){
               var snake = snakes[s];
               var distance = calcDistance(snake.coords[0], food[f]);
               
               console.log('distance' + distance);
               
               if(snake.id === id){
                   fd = distance;
               }
               else{
                   if(distance < ed){
                       ed = distance
                   }
               }
           }
           
           console.log('fd: ' + fd + ' ed: ' + ed);
           foodItem.score = (fd - ed);
           objectives.push(foodItem);
       }
   }
   
   callback(null, objectives);
};

module.exports = objective;
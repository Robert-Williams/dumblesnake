var calcDistance = require('./calcDistance');

var snake1 = {
        id: '07a8c99f-1077-4a4e-86bf-a6ba390f8546',
        coords: [ [ 7, 8 ], [ 8, 8 ], [ 8, 9 ] ]
    };

    var snake2 = {
        id: '441541c2-6682-4e78-a9c2-3d91e0abe5d0',
        coords: [ [ 13, 2 ], [ 13, 3 ], [ 13, 4 ] ]
    };

    var coin1 = [5, 5];

    var food1 = [1,1];
    var food2 = [10,9];
    var food3 = [6,7];


var objective = function(){
   var objectives = [];
   var coin = [coin1];
   var food = [food1, food2, food3];
   var snakes = [snake1, snake2];
   var id = '441541c2-6682-4e78-a9c2-3d91e0abe5d0';

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
           fd = 1000;
           ed = 1000;

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

   return objectives;
};

module.exports = objective;

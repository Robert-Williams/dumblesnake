var pickDirection = function(head, dest){
   var dir = 'north';
   // Check if x value is the same
   if (head[0] == dest[0]){
      // Check if our y > dest y
      if (head[1] > dest[1]){
         dir = 'north';
      // Check if our y < dest y
      }else if (head[1] < dest[1]) {
         dir = 'south';
      }
   }
   // Check if y value is the same
   if (head[1] == dest[1]){
      // Check if our x > dest x
      if (head[0] > dest[0]){
         dir = 'west';
      // Check if our x < dest x
      }else if (head[0] < dest[0]) {
         dir = 'east';
      }
   }

   callback(null, dir);
};

module.exports = pickDirection;

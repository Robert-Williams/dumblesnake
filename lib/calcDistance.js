var calcDistance = function(point1, point2){
   var d = Math.sqrt(Math.pow((point2[0] - point1[0]),2) + Math.pow((point2[1] - point1[1]),2));
   return d;
};

module.exports = calcDistance;

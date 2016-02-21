var pickTarget = function(callback, result){
  var attitude = result.attitude;
  var objectives = result.objective;

  var objective = [0,0];
  var max = 0;
  for (var i = 0; i < objectives.length; i++){
    if(objectives[i].score > max){
      max = objectives[i].score;
      objective = objectives[i].coord;
    }
  }

  callback(null, objective);
};

module.exports = pickTarget;

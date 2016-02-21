async.auto({
  createMap: function(callback){

    //callback()
  },
  determineAttitude: function(callback, req){


  },
  rateObjective: ["createMap", "determineAttitude", function(callback){

  }],
  choosePath: ["rateObjective", function(callback){

  }]
}, function(err, results) {
  console.log("err: ", err);
  //Respond using results
});

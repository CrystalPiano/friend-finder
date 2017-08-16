/* var express = require ('express');

var express = app; */

var friends = require('../data/friends');

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    console.log("Made it into route!");
    var chosen = req.params.friends;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].name) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
  });

  

  app.post("/api/friends", function(req, res) {
    var friends = req.body;
    friends.routeName = friends.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(friends);
  
    friends.push(friends);
  
    res.json(friends);
  });
};
app.get("/api/friends", function(req, res) {
    var chosen = req.params.friends;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(characters);
  });



  app.post("/api/friends", function(req, res) {
    var friends = req.body;
    friends.routeName = friends.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(friends);
  
    characters.push(friends);
  
    res.json(friends);
  });
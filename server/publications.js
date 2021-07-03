Meteor.publish('games', function() {
  return Games.find({}, {limit: 200, sort: {submitted: -1}});
});

Meteor.publish('chat', function(gameId) {
  var size = Math.max(0, Chat.find({gameId: gameId}).count() - 100);
  return Chat.find({ gameId: gameId }, {skip: size});
});

Meteor.publish("onlineUsers", function() {
  return Meteor.users.find({ "status.online": true });
});

Meteor.publish("players", function(gameId) {
  return Players.find({ gameId: gameId });
});

Meteor.publish("cards", function(gameId) {
  return Cards.find({ gameId: gameId, userId: this.userId });
});

Meteor.publish("highscores", function() {
  return Highscores.find();
});

Meteor.publish("standings", function() {
  return Standings.find();
});

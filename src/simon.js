export function NewGame() {
  this.colors = ["blue", "green", "red", "yellow"];
  this.sequence = [];
  this.userSequence = [];
}

NewGame.prototype.addToSequence = function() {
  var colorPosition = Math.floor(Math.random() * Math.floor(4));
  var colorToSequence = this.colors[colorPosition];
  this.sequence.push(colorToSequence);
};

NewGame.prototype.addToUserSequence = function(color) {
  this.userSequence.push(color);
};

NewGame.prototype.check = function() {

};

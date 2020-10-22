//Business Logic
function Player(userName,score) {
    this.userName = userName;
    this.score = score;
  }
  
  Player.prototype.totalScore = function (number) {
    return this.score += number;
  };
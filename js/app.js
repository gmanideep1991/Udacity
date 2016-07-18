var NUMBER_OF_ENEMIES = 3,
    ENEMY_STARTING_POSITION = 60,
    POSITION_INCREAMENT = 80,
    ROW_WIDTH = 83,
    COL_WIDTH = 101,
    SCORE = 0,
    PLAYER_LIFE = 2,
    MAX_SPEED=600,
    MIN_SPEED=0,
    PLAYER_STARTING_POSITION_X=200,
    PLAYER_STARTING_POSITION_Y=380;



var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

Enemy.prototype.update = function(dt) {
    if (this.x < 500) {
        this.x += getSpeed() * dt;
    } else {
        this.x += -100;
        this.x = getSpeed() * dt;
    }
};


/**
 * [getSpeed calculates the speed of enemy]
 * @return {[number]} [random number between 0 and 600]
 */
function getSpeed() {
    return Math.floor(Math.random() * (MAX_SPEED-MIN_SPEED+1) + MIN_SPEED);

}

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var allEnemies = [];
for (i = 0; i < NUMBER_OF_ENEMIES; i++) {
  //I am currently considering creating only three enemies i might refactor in future to support increase in enemies.
    var temp = new Enemy(0, getPositionY(i));
    allEnemies.push(temp);
}

/**
 * [getPositionY used in calculating 'Y' co-ordinate for enmey while creating the enemy]
 * @param  {[number]} i [column of enemy.]
 * @return {[number]}   [returns the 'Y' co-ordinate.]
 */
function getPositionY(i) {
    return (ENEMY_STARTING_POSITION + POSITION_INCREAMENT * i);
}

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    updatePlayerLife();
    updateScoreBoard();
};
Player.prototype.update = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if ((this.y == allEnemies[i].y) && (this.x < allEnemies[i].x + ROW_WIDTH) && (this.x + ROW_WIDTH > allEnemies[i].x)) {
            if (PLAYER_LIFE === 0) {
              alert("Game Over!!!. Your score is '"+SCORE+"'. Hit Enter to play again.");
              location.reload();
            } else {
                this.reset();
                PLAYER_LIFE -= 1;
                updatePlayerLife();
            }

        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = PLAYER_STARTING_POSITION_X;
    this.y = PLAYER_STARTING_POSITION_Y;
};

Player.prototype.handleInput = function(key) {
    // make sure player is within boundaries of canvas
    // make player move with appropriate keyboard key presse
    switch (key) {
        case 'left':
            if (this.x > 0) {
                this.x -= COL_WIDTH;
            }
            break;
        case 'right':
            if (this.x < 400) {
                this.x += COL_WIDTH;
            }
            break;
        case 'up':
            if (this.y > 0) {
                this.y -= POSITION_INCREAMENT;
                if (this.y < 60) {
                    this.reset();
                    SCORE += 1;
                    updateScoreBoard();
                }
            }
            break;
        case 'down':
            if (this.y<380) {
                this.y += POSITION_INCREAMENT;
            }
            break;
        default:

    }


};
var player = new Player(PLAYER_STARTING_POSITION_X, PLAYER_STARTING_POSITION_Y);
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
function updateScoreBoard(){
  var nodeScore = document.getElementsByClassName("score")[0];
  if(nodeScore.hasChildNodes()){
    nodeScore.removeChild(nodeScore.childNodes[0]);
  }
    nodeScore.appendChild(document.createTextNode(SCORE));
}
function updatePlayerLife(){
  var nodeScore = document.getElementsByClassName("player-life")[0];
  if(nodeScore.hasChildNodes()){
    nodeScore.removeChild(nodeScore.childNodes[0]);
  }
    nodeScore.appendChild(document.createTextNode(PLAYER_LIFE));
}
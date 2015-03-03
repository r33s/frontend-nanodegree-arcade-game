// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var speed = this.x + 100*dt;
    this.x = speed;
    //console.log(speed);
    if (speed >= 505) {
        this.x = -105;
    };
    //console.log(this.x);
    this.y = this.y;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 203;
    this.y = 395;
};

player.prototype.update = function() {

};

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
player.prototype.handleInput = function(key) {
    console.log(key);
    if (key === 'left'){
        this.x = this.x - 55;
    } else if (key === 'up') {
        this.y = this.y - 55;
    } else if (key === 'right') {
        this.x = this.x + 55;
    } else if (key === 'down') {
        this.y = this.y + 55;
    } else {
        this.y = this.y;
        this.x = this.x;
    };
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new player();
var enemy1 = new Enemy(-105,225);
allEnemies.push(enemy1);
var enemy2 = new Enemy(-200,145);
allEnemies.push(enemy2);
var enemy3 = new Enemy(-105,60);
allEnemies.push(enemy3);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

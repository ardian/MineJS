var createGame = require('voxel-engine');

var game = createGame({
  texturePath: 'textures/'
});
var container = document.body;
game.appendTo(container);

var createPlayer = require('voxel-player')(game);

var player = createPlayer('player.png');

//# Puts the camera into the player
player.possess();


player.yaw.position.set(0, 100, 0);

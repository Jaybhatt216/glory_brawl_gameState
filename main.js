var game = new Phaser.Game(800, 600, Phaser.AUTO)

var player, enemy, platforms, ledge, cursors, wing, shield, spikes, roofSpikes, fire, fallingSpikes;
var runFastX = false, jumpHigherX = false, stunGunWeapon = false;
var timer;
var total = 0;
var highestTotalLocal=0;

////////////////////////////////////////////////////////////////GAME STATES////////////////////////////////////////////////////////////////
game.state.add('state1',brawl.state1);
game.state.add('state2',brawl.state2);
game.state.add('state3',brawl.state3);
game.state.add('state4',brawl.state4);
game.state.start('state1');
//game.state.start('state2');
//game.state.start('state3');
//game.state.start('state4');
////////////////////////////////////////////////////////////////PHASER 2 GAME (GLORY_BRAWL)////////////////////////////////////////////////////////////////

// Firebase for Leaderboard
//

// FIgure ot Later

//Changing Game States Where you Press Numbers
function changeState (i,stateNum) {
  console.log(i);
  game.state.start('state'+stateNum);
}

function addKeyCallback(key,fn,args) {
  game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function addChangeStateEventListeners() {
  addKeyCallback(Phaser.Keyboard.ONE, changeState,1);
  addKeyCallback(Phaser.Keyboard.TWO, changeState,2);
  addKeyCallback(Phaser.Keyboard.THREE, changeState,3);
  addKeyCallback(Phaser.Keyboard.FOUR, changeState,4);
}



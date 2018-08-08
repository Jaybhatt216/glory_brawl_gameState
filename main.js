var game = new Phaser.Game(800, 600, Phaser.AUTO)

var player, enemy, platforms, ledge, cursors, stun, wing, shield, spikes, roofSpikes, fire, fallingSpikes;
var runFastX = false, jumpHigherX = false, stunGunWeapon = false;

////////////////////////////////////////////////////////////////GAME STATES////////////////////////////////////////////////////////////////
game.state.add('state1',demo.state1);
game.state.add('state2',demo.state2);
game.state.add('state3',demo.state3);
game.state.add('state4',demo.state4);
game.state.start('state1');
//game.state.start('state2');
//game.state.start('state3');
//game.state.start('state4');
////////////////////////////////////////////////////////////////PHASER 2 GAME (GLORY_BRAWL)////////////////////////////////////////////////////////////////


/////////////////////////////////////////////Other Functions (Ex: Player Weapon Handlers)////////////////////////////////////////////////////////////////////


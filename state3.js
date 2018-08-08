brawl.state3=function(){};
brawl.state3.prototype= {
    preload: function (){
        game.load.image('background-three', 'assets/lose.png');
    },
    create: function (){
        game.add.sprite(0,0, 'background-three');
        console.log("state3");
        addChangeStateEventListeners();

    },
    update: function (){}
};
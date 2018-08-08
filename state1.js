var brawl= {};
brawl.state1=function(){};
brawl.state1.prototype= {
    preload: function (){
        game.load.image('background-one', 'assets/loading.png');
    },
    create: function (){
        game.add.sprite(0,0, 'background-one');
        console.log("state1");
        addChangeStateEventListeners();
        startGame();
    },
    update: function (){}
};



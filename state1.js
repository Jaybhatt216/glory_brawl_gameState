var brawl= {};
brawl.state1=function(){};
brawl.state1.prototype= {
    preload: function (){
        game.load.image('background-one', 'assets/trumpFirstBackground.jpg');
    },
    create: function (){
        game.add.sprite(200,250,'background-one');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        console.log("state1");
        text = game.add.text(40, 79, '', { font: "15px Arial", fill: "#19de65" });
        nextLine();
        addChangeStateEventListeners();
    },
    update: function (){}
};



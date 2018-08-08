demo.state4=function(){};
demo.state4.prototype= {
    preload: function (){
        game.load.image('background-four', 'assets/sky.png');
    },
    create: function (){
        game.add.sprite(0,0, 'background-four');
        console.log("state4");
        addChangeStateEventListeners();
    },
    update: function (){}
};
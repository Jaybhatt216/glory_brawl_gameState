var demo= {};
demo.state1=function(){};
demo.state1.prototype= {
    preload: function (){
        game.load.image('background-one', 'assets/loading.png');
    },
    create: function (){
        game.add.sprite(0,0, 'background-one');
        console.log("state1");
        addChangeStateEventListeners();
    },
    update: function (){}
};

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

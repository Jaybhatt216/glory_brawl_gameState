brawl.state3=function(){};
brawl.state3.prototype= {
    preload: function (){
        game.load.image('background-three', 'assets/trumpBackground.png');
    },
    create: function (){
        game.add.sprite(200,250, 'background-three');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        console.log("state3");
        text = game.add.text(250, 200, 'Spacebar to Play Again');

        //	Center align
        text.anchor.set(0.5);
        text.align = 'center';

        //	Font style
        text.font = 'Arial Black';
        text.fontSize = 50;
        text.fill= "#19de65";
        text.fontWeight = 'bold';

        //	Stroke color and thickness
        text.stroke = '#000000';
        text.strokeThickness = 8;
        text.fill = '#43d637';

        //  And now we'll color in some of the letters
        text.addColor('#ff00ff', 9);
        text.addColor('#43d637', 13);

        //  This allows us to color the stroke instead of the letters
        text.addStrokeColor('#ff0000', 13);
        text.addStrokeColor('#000000', 20);



    },
    update: function (){
        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        location.reload(); 
    }
    }
};
class Booyah extends Phaser.Scene{

    constructor(){
        super("Booyah");
        this.scoreText = "" + this.score;
    }
    init(data){
        this.score = data.score;
    }

    preload(){

        this.load.image('fondoFinal','../public/img/fondoW.png');
        this.load.image('menu','../public/img/menu.png');
        this.load.image('YouWin','../public/img/YouWin.png');
        this.load.image('again','../public/img/again.png');

    }

    create(){
        this.add.image(400,300, 'fondoFinal'); 
        this.starbutton = this.add.image(400, 100, 'YouWin').setScale(0.3);
        this.starbutton = this.add.image(150, 500, 'again').setScale(0.23).setInteractive();
        this.starbutton.on('pointerdown', () =>{
            this.scene.stop("Booyah");
            this.scene.start('Escena2');
        } );

        this.starbutton = this.add.image(700, 500, 'menu').setScale(0.31).setInteractive();
        
        this.starbutton.on('pointerdown', () =>{
            this.scene.stop("Booyah");
            this.scene.start('menu');
        } );
    } 
}

export default Booyah;
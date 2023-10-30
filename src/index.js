import Escena1 from "./escenas/Escena1.js";
import Escena2 from "./escenas/Escena2.js";
import GameOver from "./escenas/GameOver.js";
import Booyah from "./escenas/Booyah.js";
import menu from "./escenas/Menu.js";

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT, // Escala para ajustar el juego a la ventana
        autoCenter: Phaser.Scale.CENTER_BOTH // Centra automáticamente el juego en la ventana
    },
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
    scene:[menu,Escena1,Escena2,GameOver,Booyah]
};
let game = new Phaser.Game(config);
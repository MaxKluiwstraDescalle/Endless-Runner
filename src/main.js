// Max-Emilien Kluiwstra-Descalle
// Game Name
// 
//

// keep me honest
'use strict';

// define and configure main Phaser game object
let config = {
    parent: 'endGame',
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Play, GameOver ]
}

let game = new Phaser.Game(config)

let keySPACE, keyRESET 
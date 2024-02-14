// Max-Emilien Kluiwstra-Descalle
// Game Name
// 
//

'use strict';
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
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Play, GameOver ]
}

let game = new Phaser.Game(config)

let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

let timeSurv = 0

let keySPACE, keyRESET//, keyRIGHT, keyLEFT, keyUP, keyDOWN 
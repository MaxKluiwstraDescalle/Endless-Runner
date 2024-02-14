class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }
    create(){
        let menuConfig= {
            fontFamily: 'Georgia',
            fontSize: '144px',
            backgroundColor: '#000',
            color: '#ADD8E6',
            align: 'right',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/4 - borderUISize - borderPadding, 'Game Name', menuConfig).setOrigin(0.5)
        menuConfig.fontSize = '32px'
        menuConfig.backgroundColor = '#000'
        menuConfig.color = '#FFFFFF'
        
        this.add.text(game.config.width/2, game.config.height/2, 'Use Arrows Keys to Move, Stay away from the edges!', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#000'
        menuConfig.color = '#FFFFFF'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press SPACE to Start', menuConfig).setOrigin(0.5)

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        //keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        //keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        
    
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.sound.play('select')
            this.scene.start('playScene')
        }
    }

}
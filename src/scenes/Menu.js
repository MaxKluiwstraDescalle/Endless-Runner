class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }
    create(){
        let menuConfig= {
            fontFamily: 'Georgia',
            fontSize: '72px',
            backgroundColor: '#ADD8E6',
            color: '#000',
            align: 'right',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/4 - borderUISize - borderPadding, 'Game Name', menuConfig).setOrigin(0.5)
        menuConfig.fontSize = '16px'
        menuConfig.backgroundColor = '#D3D3D3'
        menuConfig.color = '#000'
        
        this.add.text(game.config.width/2, game.config.height/2, 'Use Space to Jump', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#D3D3D3'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press SPACE to Start', menuConfig).setOrigin(0.5)

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
    
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.sound.play()
            this.scene.start('playScene')
        }
    }

}
class GameOver extends Phaser.Scene{
    constructor(){
        super("gameoverScene")
    }

    create(){
        let menuConfig= {
            fontFamily: 'Georgia',
            fontSize: '10px',
            backgroundColor: '#000',
            color: '#FFFFFF',
            align: 'right',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //this.bgMusic.stop()
        this.add.text(game.config.width/2, game.config.height/5 - borderUISize - borderPadding, `Game Over! Survival time: ${timeSurv}s`, menuConfig).setOrigin(0.5)
        menuConfig.fontSize = '80px'
        menuConfig.color= '#ADD8E6'
        this.add.text(game.config.width/2, game.config.height/3 - borderUISize - borderPadding, 'Credits', menuConfig).setOrigin(0.5)
        menuConfig.fontSize = '40px'
        menuConfig.color = '#D3D3D3'
        
        this.add.text(game.config.width/4, game.config.height/3, 'Audio', menuConfig).setOrigin(0.5)
        menuConfig.fontSize='20px'
        this.add.text(game.config.width/4, game.config.height/2, 'https://jfxr.frozenfractal.com/', menuConfig).setOrigin(0.5)
        menuConfig.fontSize='40px'
        this.add.text(game.config.width*0.75, game.config.height/3 , 'Visuals', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width*0.75, game.config.height/2 , 'https://apps.lospec.com/pixel-editor', menuConfig).setOrigin(0.5)


        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
    
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyRESET)){
            this.sound.play('gameover')
            this.scene.start('menuScene')
        }
    }

}
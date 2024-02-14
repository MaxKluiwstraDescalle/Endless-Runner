class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){
        timeSurv = 0

        this.countUp = this.time.addEvent({
            delay: 1000,
            callback: this.timerUpdate,
            callbackScope: this,
            loop: true
        })
        this.orbGroup = this.add.group({
            runChildUpdate: true
        })


        this.map=this.add.image(0,0,'map').setOrigin(0)


        this.mon = new Mon(this, this.map.width/2, this.map.height/2, 'mon', 0, 'down')

        //let orb = this.physics.add.sprite(this.game.width/17, this.game.height/10,'orb').setOrigin(0.5)
        //orb.body.velocity.set(600,600)

        this.platformSpeed = -600
        this.bgMusic = this.sound.add('bgmusic',{
            volume: 1,
            rate: 1,
            loop: true
        })

        this.keys= this.input.keyboard.createCursorKeys()


        this.input.keyboard.on('keydown-D',function(){
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        this.bgMusic.play()
        
        
        //mon.setColliderWorldBounds(true)
        
        //mon.setMaxvelocity(0,1000)
        
        
        //console.log(this.mon)
        this.cameras.main.setBounds(0,0,this.map.width, this.map.height)
        this.cameras.main.startFollow(this.mon, true, 0.5, 0.5)
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

        //console.log(this.mon)


        let timerConfig= {
            fontFamily: 'Georgia',
            fontSize: '70px',
            color: '#ADD8E6',
            align: 'right',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.timer = this.add.text(game.config.width/15, game.config.height/15, this.time.now/1000, timerConfig).setOrigin(0.5)
        this.timer.setScrollFactor(0)
        

        
    }

    update(){
        
        
        //console.log(this.time.now/1000)
        //console.log(this.monFSM)
        this.monFSM.step()
        this.times = Math.floor(this.time.now/1000)
        this.timer.setText(timeSurv)

        

        this.physics.world.collide(this.mon, this.orbGroup, this.orbCollision, null, this)
        this.newOrb()

        //this.update(time, delta)

        
        
    }

    newOrb(){
        let orb = this.physics.add.sprite(this.map.height-5, this.map.width/2,'orb').setOrigin(0.5)
        orb.body.velocity.set(Phaser.Math.Between(0,200),Phaser.Math.Between(0,200)) 

        const MaxX = this.map.width - orb.width
        const MaxY = this.map.height - orb.height
        //console.log(this.time.now/1000 % 1)
        if((this.time.now/1000%1 >0.95)){
            var randNum = Math.floor(Math.random()*4)+1

            if(randNum == 1){
                orb = this.physics.add.sprite(0, Phaser.Math.Between(0,MaxY),'orb').setOrigin(0.5)
                orb.body.velocity.set(Phaser.Math.Between(0,200),Phaser.Math.Between(0,200)) 
                
                
            }else if(randNum ==2){
                orb = this.physics.add.sprite(MaxX, Phaser.Math.Between(0, MaxY),'orb').setOrigin(0.5)
                //orb.body.velocity.set(-200, 200)
                orb.body.velocity.set(Phaser.Math.Between(0,-200),Phaser.Math.Between(0,200))
 
            }else if(randNum == 3){
               orb = this.physics.add.sprite(Phaser.Math.Between(0,MaxX), 0, 'orb').setOrigin(0.5)
               //orb.body.velocity.set(200, 200)
               orb.body.velocity.set(Phaser.Math.Between(50,200),Phaser.Math.Between(50,200))

            }else if(randNum == 4){
                orb = this.physics.add.sprite(Phaser.Math.Between(0, MaxX), MaxY, 'orb').setOrigin(0.5)
                //orb.body.velocity.set(200,-200)
                orb.body.velocity.set(Phaser.Math.Between(50,200),Phaser.Math.Between(-50,-200))
            }

            orb.setCollideWorldBounds(true)
            orb.setBounce(1)
            orb.setImmovable();
            this.sound.play('spawn')
            this.orbGroup.add(orb)
        }


    }

    orbCollision(){
        this.sound.play('hurt')
        this.bgMusic.stop()
        this.scene.start('gameoverScene')
    }

    timerUpdate(){
        timeSurv = timeSurv + 1
        //console.log(timeSurv)
    }


}
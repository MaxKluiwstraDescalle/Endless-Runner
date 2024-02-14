class Mon extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, direction){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width , this.height )
        this.body.setCollideWorldBounds(true)

        this.direction = direction
        this.monVelocity = 400

        scene.monFSM = new StateMachine('idle',{
            idle: new IdleState(),
            move: new MoveState()
        },[ scene, this])
    }
}



class IdleState extends State{
    enter(scene,mon){
        mon.setVelocity(0)
        mon.anims.play(`walk-${mon.direction}`)
        mon.anims.stop()
    }

    execute(scene, mon){
        const {left, right, up, down} = scene.keys
        if(left.isDown || right.isDown || up.isDown || down.isDown){
            this.stateMachine.transition('move')
            return
        }
    }
}

class MoveState extends State{
    execute(scene, mon){
        const{left, right, up , down} = scene.keys
        if(!(left.isDown || right.isDown || up.isDown || down.isDown)){
            this.stateMachine.transition('idle')
        }
        let moveDir = new Phaser.Math.Vector2(0,0)

        if(up.isDown){
            moveDir.y = -1
            mon.direction = 'up'
        }else if(down.isDown){
            moveDir.y = 1
            mon.direction = 'down'
        }else if(right.isDown){
            moveDir.x = 1
            mon.direction = 'right'
        }else if(left.isDown){
            moveDir.x = -1
            mon.direction = 'left'
        }
        //console.log('Hello')
        moveDir.normalize()
        mon.setVelocity(mon.monVelocity * moveDir.x, mon.monVelocity * moveDir.y)
        mon.anims.play(`walk-${mon.direction}`, true)
    }
    

}
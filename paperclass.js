class Paper{
    constructor(x,y){
       var option=
       { 
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
      }
        this.body=Matter.Bodies.circle(x,y,10,10,option)
        World.add(world,this.body)
        
    }
    display()
    {
        ellipseMode(CENTER)
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,10,200) 
    }
    }
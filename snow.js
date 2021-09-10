class Snow{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.3,
            density:0.10,
            isStatic:false,
        }
        
        
        this.body= Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
        this.image = loadImage("snow4.webp")
    }
 display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,50,50)
    pop();
 }   
}
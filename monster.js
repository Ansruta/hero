class monster{
    constructor(x,y){
        var op={
            'isStatic':true,
            'density':1.0,
            'friction':0.1
        }
        this.body=Bodies.circle(x,y,60,op);
        this.radius=30;
        World.add(world,this.body)
        this.image=loadImage('images/Monster-01.png');
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
}

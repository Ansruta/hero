class ground{
    constructor(x,y,width,height){
        var op={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        fill(200);
        rect(0,0,this.width,this.height)
    }
}
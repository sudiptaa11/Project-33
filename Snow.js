class Snow{
    constructor(x,y,w,h){
        var options = {
            friction : 1,
            density : 50
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = w;
        this.height = h;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
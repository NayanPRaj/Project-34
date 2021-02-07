class Monster{
constructor(x,y,r){
var options={
    isStatic:true,
    restitution:0.5,
    friction:1.0
}
this.x=x;
this.y=y;
this.r=r;


this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
this.image=loadImage("images/Monster-01.png");
World.add(world, this.body); 



}
display(){
   // var pos =this.body.position;
    //pos.x=mouseX;
    //pos.y=mouseY;
    var angle = this.body.angle;
    push();
    translate(this.x,this.y);
    imageMode(CENTER);
    image(this.image,0,0,(this.r)/2);
    
    pop();
}
}
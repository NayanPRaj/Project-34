class SuperHero{
    constructor(x,y,width,height){
    
        var options = {
           isStatic:false,
           stitution:0,
           friction:1,
           density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 200;
        this.height = 200;

        this.image=loadImage("images/Superhero-01.png");
        
        World.add(world, this.body); 
    }
    
    display(){
        var pos =this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        this.image.scale=0.1;
        pop();
      }
    }
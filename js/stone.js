class Stone{
    constructor(x,y,RADIUS) {
        var options ={
          isStatic : false,    
          restitution : 0,
          friction : 1,
          density : 1.2
        }
        this.radius = RADIUS;
        this.image = loadImage("images/stone.png"); 
        this.body = Bodies.circle(x,y,RADIUS,options);
        World.add(world,this.body);

        
      }
        display()         
        {
          var stonepos = this.body.position;
          push();
          translate(stonepos.x,stonepos.y);
			    ellipseMode(RADIUS)
          image(this.image,0,0,this.radius,this.radius);
          fill("red");
          pop();
        }
    }
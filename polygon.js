class Polygon{
    constructor(x, y,r) {
      var options = {
         'restitution':1,
          'frictionAir':0.001,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, r, options);
      this.image=loadImage("polygon.png")
      this.r= r;
     
      
      World.add(world, this.body);
    }
    display(){
       
      var pos =this.body.position;
     
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  };
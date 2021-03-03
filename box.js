class Box {
    constructor(x, y, width, height) {
     
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      if(this.body.speed<5){
        push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
      }
     else{
World.remove(world,this.body)
this.visibility=this.visibility-5
     }
    }
  };
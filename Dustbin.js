class Dustbin{
constructor(x, y, width, height){
var options = {
isStatic : true
}
this.bodyA = Bodies.rectangle(x, y, width, options);
World.add(world, this.bodyA);
this.bodyB = Bodies.rectangle(x-width/2, y-height*2, height);   //this
World.add(world, this.bodyB);                                  //forgot what comes after height
this.bodyC = Bodies.rectangle(x+width/2, y-height*2, height);   //and this
World.add(world, this.bodyC)
this.bodyB.width = width;
this.bodyB.height = height;
}
display(){
fill("white");
rect(this.bodyA.position.x, this.bodyA.position.y, this.bodyA.width, this.bodyA.height);
rect(this.bodyB.position.x, this.bodyB.position.y, this.bodyB.width, this.bodyB.height);
rect(this.bodyC.position.x, this.bodyC.position.y, this.bodyC.width, this.bodyC.height);

}
}
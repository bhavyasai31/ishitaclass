class Box{

constructor(){


this.body=Bodies.rectangle(200,100,60,70);
World.add(world,this.body);


}

display(){

var pos =this.body.position;

rectMode(CENTER);
fill(255);
rect(pos.x,pos.y,this.width,this.height)

}






}
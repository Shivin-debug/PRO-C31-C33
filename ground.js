class Ground{
    constructor(x, y, width, height){
        var grnd_options = {
            isStatic: true
        }

        this.grd = Bodies.rectangle(x, y, width, height, grnd_options);
        this.width = width;
        this.height = height;

        World.add(world, this.grd);
    }
    
    display(){
        var g = this.grd.position;
        rectMode(CENTER);
        fill("red");
        rect(g.x, g.y, this.width, this.height);
    }
}
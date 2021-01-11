class Plinko{
    constructor(x, y){
        var pl_options = {
            isStatic: true,
            restitution: 0.3
        }

        this.plinko = Bodies.circle(x, y, 10, pl_options);
        this.r = 10;
    }

    display(){
        var pl = this.plinko.position;
        push()
        translate(pl.x, pl.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop()
    }
}
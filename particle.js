class Particle{
    constructor(x, y , r){
        var p_options = {
            restitution: 0.3
        }
        this.r = r;
        this.particle = Bodies.circle(x, y, this.r, p_options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));

        World.add(world, this.particle);
    }
    
    display(){
        var p = this.particle.position;
        var angle = this.particle.angle;
        push()
        translate(p.x, p.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop()
    }
}
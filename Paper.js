class Paper {
    constructor(x, y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("paper.png");
        this.radius = 70;
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        fill("grey");
        stroke(0);
        strokeWeight(4);
        image(this.image,100,118,this.radius,this.radius);
        pop();
    }
}
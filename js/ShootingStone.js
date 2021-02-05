class Shooting{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = pointB;
        this.shooting = Constraint.create(options);
        World.add(world, this.shooting);
    }

    fly(){
    this.shooting.bodyA =null;
    }

    display(){
        if(this.shooting.bodyA){
        var pointA = this.shooting.bodyA.position;
        var pointB = this.pointB;
        }
    }
}
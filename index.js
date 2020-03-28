// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let perim = 0
        this.sides.map(x => perim += x)
        return perim
    }
}

class Triangle extends Polygon{
    get isValid(){
        if ((this.sides[0] + this.sides[1]) > this.sides[2]
        && (this.sides[1] + this.sides[2]) > this.sides[0]
        && (this.sides[2] + this.sides[0]) > this.sides[1]){
           return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    get area(){
        return this.sides[0] ** 2
    }

    get isValid(){
        if (this.countSides !== 4) {
            return false
        } else {
            return (this.sides[0] == this.sides[1] 
            && this.sides[1] == this.sides[2]
            && this.sides[2] ==  this.sides[3]) 
        }
    }
}
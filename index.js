// Your code here

class Polygon {
  constructor(array){
    this.sides = array 
  }
  
  get countSides(){
    return this.sides.length
  }
  
  get perimeter(){
    let ans = 0
    for(let i = 0; i < this.sides.length; i++){
      ans += this.sides[i]
    }
    
    return ans
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    if (this.countSides === 3){
      let sides = this.sides.sort()
      return (sides[0] + sides[1] >= sides[2])
      
    }else{
      return false
    }
  }
}

class Square extends Polygon {
  get isValid(){
    return (this.countSides === 4)&&( 
        this.sides[0] == this.sides[3]
      )
  }
  
  get area(){
    return this.sides[0] * this.sides[0]
  }
}
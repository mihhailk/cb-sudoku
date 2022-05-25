export class Solver {
  emptyGrid() {
    return Array.from(Array(81).keys()).map(()=>'')
  }

  solve(input){
    if (input.length !== 81) {
      throw new Error("Invalid input")
    }
    return input.map(()=>[1,2,3,4,5,6,7,8,9])
  }
}

var solver = new Solver();
export default solver
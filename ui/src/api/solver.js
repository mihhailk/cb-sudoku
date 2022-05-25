export class Solver {
  emptyGrid() {
    return Array.from(Array(81).keys()).map(()=>'')
  }

  solve(input){
    if (input.length !== 81) {
      throw new Error("Invalid input")
    }
    let result = input.map(()=>[1,2,3,4,5,6,7,8,9])

    console.log('row number', input)

    return result.map((values ,idx)=> {
      if (input[idx]) {
        return [input[idx]]
      }
      const rowNumber =this.belongsToRow(idx)
      const rowItems = input.filter((inputValue, idx2) => this.belongsToRow(idx2) === rowNumber)
      return values.filter(v => !rowItems.includes(v))
    })
  }

  belongsToRow(i) {
    return Math.floor(i / 9)
  }

  belongsToColumn(i) {
    return i % 9
  }

  belongsToSquare(i) {
    return Math.floor( this.belongsToRow(i) / 3) * 3 + Math.floor((this.belongsToColumn(i) / 3))
  }
}

var solver = new Solver();
export default solver
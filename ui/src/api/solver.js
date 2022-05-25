export class Solver {
  emptyGrid() {
    return Array.from(Array(81).keys()).map(()=>'')
  }

  solve(input){
    if (input.length !== 81) {
      throw new Error("Invalid input")
    }
    let result = input.map(()=>[1,2,3,4,5,6,7,8,9])

    return result.map((values ,idx)=> {
      if (input[idx]) {
        return [input[idx]]
      }
      const rowItems = this.rowItems(input, this.belongsToRow(idx))
      const colItems = this.colItems(input, this.belongsToColumn(idx))
      const squareItems = this.squareItems(input, this.belongsToSquare(idx))
      return values
      .filter(v => !rowItems.includes(v))
      .filter(v => !colItems.includes(v))
      .filter(v => !squareItems.includes(v))
    })
  }

  rowItems(array, rowNumber) {
    return array.filter((inputValue, idx2) => this.belongsToRow(idx2) === rowNumber)
  }

  colItems(array, colNumber) {
    return array.filter((inputValue, idx2) => this.belongsToColumn(idx2) === colNumber)
  }
  squareItems(array, colNumber) {
    return array.filter((inputValue, idx2) => this.belongsToSquare(idx2) === colNumber)
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
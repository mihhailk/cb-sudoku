export class Solver {
  emptyGrid() {
    return Array.from(Array(81).keys()).map(()=>'')
  }

  solve(input) {
    const hints =  this.hints(input)

    const result =  hints.map(r=> r.length === 1 ? r[0]:'')
     if (!this.equals(input, result)) {
       return this.solve(result)
     } else {
       return result
     }
  }

  equals(a, b) {
    for (let i = 0; i < 81; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }

  choseUniqueValuesInRow(hints) {
    return hints.map((hintValues, idx)=> {
      if (hintValues.length === 1) return hintValues
      const col = this.belongsToColumn(idx);
      const row = this.belongsToRow(idx);
      const rowItems = this.rowItems(hints, row)
      const rowHints = new Set(rowItems
                            .filter((i,idx)=> idx !== col)
                            .flat())
      const result = hintValues.filter(i=> !rowHints.has(i))
      if (result.length === 1) return [result]
      return hintValues
    })
  }

  choseUniqueValuesInCol(hints) {
    return hints.map((hintValues, idx)=> {
      if (hintValues.length === 1) return hintValues
      const col = this.belongsToColumn(idx);
      const row = this.belongsToRow(idx);
      const colItems = this.colItems(hints, col)
      const colHints = new Set(colItems
      .filter((i,idx)=> idx !== row)
      .flat())
      const result = hintValues.filter(i=> !colHints.has(i))
      if (result.length === 1) return [result]
      return hintValues
    })
  }

  choseUniqueValuesInSquare(hints) {
    return hints.map((hintValues, idx)=> {
      if (hintValues.length === 1) return hintValues
      const col = this.belongsToColumn(idx) % 3;
      const row = this.belongsToRow(idx) % 3;
      const squareIdx = col * 3 + row
      const square = this.belongsToSquare(idx);
      const items = this.squareItems(hints, square)
      const colHints = new Set(items
      .filter((i,idx)=> idx !== squareIdx)
      .flat())
      const result = hintValues.filter(i=> !colHints.has(i))
      if (result.length === 1) return [result]
      return hintValues
    })
  }

  hints(input){
    if (input.length !== 81) {
      throw new Error("Invalid input")
    }
    let result = input.map(()=>[1,2,3,4,5,6,7,8,9])

    var r =  result.map((values ,idx)=> {
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
    r = this.choseUniqueValuesInRow(r)
    r = this.choseUniqueValuesInCol(r)
    r = this.choseUniqueValuesInSquare(r)
    console.log(r)
    return r
  }

  rowItems(array, rowNumber) {
    return array.filter((inputValue, idx2) => Number(this.belongsToRow(idx2)) === Number(rowNumber))
  }

  colItems(array, colNumber) {
    return array.filter((inputValue, idx2) => Number(this.belongsToColumn(idx2)) === Number(colNumber))
  }
  squareItems(array, colNumber) {
    return array.filter((inputValue, idx2) => Number(this.belongsToSquare(idx2)) === Number(colNumber))
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

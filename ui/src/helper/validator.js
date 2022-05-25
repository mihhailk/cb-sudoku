import Solver from "@/api/solver";

export class Validator {
  indexes = [...Array(9).keys()]

  validateSudokuAsArray(array) {
    return this.validateRows(array) && this.validateColumns(array) && this.validateSquare(array)
  }

  validateRows(array) {
    for (let i in this.indexes) {
      let row = Solver.rowItems(array, i)
      let sum = row.reduce((a, b) => (a || 0) + (b || 0), 0)

      if (sum > 45) {
        return false
      }

      let numSet = new Set()
      for (let num in row) {
        if (row[num]) numSet.add(row[num])
      }
      if (numSet.size < row.filter(r => !!r).length)
        return false
    }
    return true
  }

  validateColumns(array) {
    for (let i in this.indexes) {
      let row = Solver.colItems(array, i)
      let sum = row.reduce((a, b) => (a || 0) + (b || 0), 0)

      if (sum > 45) {
        return false
      }

      let numSet = new Set()
      for (let num in row) {
        if (row[num]) numSet.add(row[num])
      }
      if (numSet.size < row.filter(r => !!r).length)
        return false
    }
    return true
  }

  validateSquare(array) {
    for (let i in this.indexes) {
      let row = Solver.squareItems(array, i)
      let sum = row.reduce((a, b) => (a || 0) + (b || 0), 0)

      if (sum > 45) {
        return false
      }

      let numSet = new Set()
      for (let num in row) {
        if (row[num]) numSet.add(row[num])
      }
      if (numSet.size < row.filter(r => !!r).length)
        return false
    }
    return true
  }

}


var validator = new Validator();
export default validator

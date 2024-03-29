<template>
  <div>
    <h1>Make me solve a sudoku</h1>
    <div>
      <span>Add some digits (from 1-9) to any field</span>
      <form v-on:submit.prevent="solve" ref="form">
        <div v-for="row in numbers" :key="'row-'+ row">
          <span v-for="column in numbers" :key="'column-'+ column">
            <input type="tel" maxlength="1" minlength="1" min="1" max="9" v-model.number="grid[row][column]"
                   :class="inputClass(row, column)"/>
          </span>
        </div>
        <button type="submit">Solve</button>
        <button type="button" v-on:click="demo">Demo</button>
        <button type="button" v-on:click="easy">Easy</button>
        <button type="button" v-on:click="hard">Hard</button>
        <button type="button" v-on:click="expert">Expert</button>
      </form>
    </div>
  </div>
</template>

<script>
import Solver from "@/api/solver";
import Vue from "vue";
import Validator from "@/helper/validator";

export default {
  data() {
    return {
      numbers: [...Array(9).keys()],
      grid: this.emptyGrid(),
      hints: this.emptyGrid()
    }
  },
  methods: {
    emptyGrid() {
      return Array(9).fill().map(() => Array(9).fill())
    },
    solve() {
      if (!this.$refs.form.checkValidity()) alert('please fill inputs correctly')
      const input = [].concat(...this.grid)
      if (!Validator.validateSudokuAsArray(input)) alert('only unique numbers per row, column and square')
      console.log(input)
      const result = Solver.solve(input)
      result.forEach((row, i) => {
        const rowNumber = Math.floor(i / 9)
        const columnNumber = rowNumber === 0 ? i : i - 9 * rowNumber
        if (row.length > 1) Vue.set(this.hints[rowNumber], columnNumber, row)
        else Vue.set(this.grid[rowNumber], columnNumber, row)
      })
    },
    inputClass(row, column) {
      let result = ''
      if (row === 0) result += 'top'
      if (column === 0) result += ' left'
      if (row === this.numbers.length - 1) result += ' bottom'
      if (column === this.numbers.length - 1) result += ' right'
      if ((row + 1) % 3 === 0) result += ' bottom'
      if ((column + 1) % 3 === 0) result += ' right'
      return result
    },
    demo() {
      this.grid = [[1, 2, 3, 4, 5, 6, 7, 8, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]]
      this.$forceUpdate()
    },
    easy() {
      this.grid = [
          [undefined, 5, 9, undefined, 6, undefined, 4, 8, undefined],
        [undefined, 8, 2, 9, undefined, 4, 7, 5, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, 4, 6, 5, undefined, 7, 3, 9, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, 7, 1, 3, undefined, 9, 2, 4, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, 2, 4, 6, undefined, 3, 1, 7, undefined],
        [undefined, 1, 3, undefined, 2, undefined, 9, 6, undefined]]
      this.$forceUpdate()
    },
    hard() {
      this.grid = [
        [undefined, undefined, undefined, undefined, 1, 8, 3, 5, undefined],
        [6, 1, undefined, 4, undefined, undefined, undefined, undefined, undefined],
        [undefined, 2, undefined, undefined, undefined, undefined, undefined, undefined, 4],
        [undefined, 3, undefined, undefined, undefined, 4, 7, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, 8, undefined, 9],
        [undefined, 5, undefined, undefined, undefined, 3, 4, undefined, undefined],
        [undefined, 9, undefined, undefined, undefined, undefined, undefined, undefined, 6],
        [7, 4, undefined, 2, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, 7, 9, 5, 4, undefined]]
      this.$forceUpdate()
    },
    expert() {
      this.grid = [
        [undefined, undefined, 8, undefined, 7, undefined, 2, undefined, undefined],
        [undefined, 5, undefined, 6, undefined, 2, undefined, 1, undefined],
        [2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 5],
        [undefined, undefined, 3, 2, undefined, 7, 4, undefined, undefined],
        [5, undefined, undefined, undefined, 4, undefined, undefined, undefined, 2],
        [undefined, undefined, 2, 9, undefined, 3, 1, undefined, undefined],
        [3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 9],
        [undefined, 4, undefined, 8, undefined, 1, undefined, 2, undefined],
        [undefined, undefined, 6, undefined, 2, undefined, 5, undefined, undefined]]
      this.$forceUpdate()
    },
  },

}
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}

form button {
  margin-top: 15px;
}

input {
  font-size: 20px;
  width: 40px;
  height: 40px;
  border: 0.5px dashed;
  text-align: center;
}

input:focus {
  outline: none;
}

input.top {
  border-top: 2px solid;
}

input.left {
  border-left: 2px solid;
}

input.right {
  border-right: 2px solid;
}

input.bottom {
  border-bottom: 2px solid;
}

button {
  display: inline-block;
  text-align: center;
  border: 1px solid #28a745;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #28a745;
  cursor: pointer;
  margin-left: 16px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>

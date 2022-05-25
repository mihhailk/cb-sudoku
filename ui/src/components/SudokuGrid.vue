<template>
  <div>
    <h1>Make me solve sudoku</h1>
    <div>
      <span>Input 10 digits to any field</span>
      <form v-on:submit.prevent="solve">
        <div v-for="row in numbers" :key="'row-'+ row">
          <span v-for="column in numbers" :key="'column-'+ column">
            <input type="number" v-model.number="grid[row][column]" :class="inputClass(row, column)"/>
          </span>
        </div>
        <button>Solve</button>
      </form>
    </div>
  </div>
</template>

<script>
import Solver from "@/api/solver";

export default {
  data() {
    return {
      numbers: [...Array(9).keys()],
      grid: this.emptyGrid()
    }
  },
  methods: {
    emptyGrid() {
      return Array(9).fill().map(() => Array(9).fill())
    },
    solve() {
      console.log(Solver.solve([].concat(...this.grid)))
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
    }
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
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid #28a745;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #28a745;
  cursor: pointer;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>

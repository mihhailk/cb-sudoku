<template>
  <div>
    <h1>Make me solve sudoku</h1>
    <div>
      <span>Input 10 digits to any field</span>
      <form v-on:submit.prevent="solve">
        <div v-for="number in numbers" :key="'row-'+ number">
          <span v-for="number in numbers" :key="'column-'+ number">
            <input type="number"/>
          </span>
        </div>
        <button>Solve</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    solve() {
      console.log("solving")
    }
  },

}
</script>

<style scoped>
form {
  margin: 0 auto;
  max-width: 500px;
}

input {
  width: 30px;
  height: 30px;
  padding-left: 2px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>

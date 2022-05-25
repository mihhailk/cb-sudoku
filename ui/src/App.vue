<template>
  <div id="app">
    <SudokuGrid/>
  </div>
</template>

<script>
import SudokuGrid from "@/components/SudokuGrid";

export default {
  name: 'App',
  components: {
    SudokuGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

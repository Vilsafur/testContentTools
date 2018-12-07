<template>
  <div id="app">
    <Document></Document>
  </div>
</template>

<script>
import Document from './components/Document.vue'

export default {
  name: 'app',
  components: {
    Document
  }
}
</script>

<style lang="scss">
body {
  background-color: #2c3e50
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

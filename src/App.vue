<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/img/logo.webp">
    <h1>This is Your Vue.js SPA PWA</h1>
    <h2>A Vue 3 CLI Generic PWA Starter Template</h2>
    <h2>It is now:</h2> <span><h3>{{now}}</h3></span>
    <h2>Welcome to the 21st Century!</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
     return {
    
  };
},
  created: function () {
    const { DateTime } = require("luxon");
    let now = DateTime.local();
    this.now = now['c'];
    console.log(now['c']);
  },
  components: {
  },
  methods: {
  
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
h3 {
color:deepskyblue;
}
</style>

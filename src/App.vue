<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <a href="#/">shouye</a>
    <a href="#/a2">huijia</a> -->
    <!-- <router-link to="/"  exact>shouye</router-link>
    <router-link to="/a1">huijia</router-link>
    <router-link to="/a2" active-class="san">3333</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #f9f; */
  /* margin-top: 60px; */
  /* font-size: 50px;  */
}
.router-link-active {
  color: #f99;
}
.san {
  font-weight: 100;
  font-size: 32px;
  color: #f0f;
}
.nav {
  color: #f9f;
  font-size: 16px;
}
</style>

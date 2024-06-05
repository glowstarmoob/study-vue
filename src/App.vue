<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/studyVue">studyVue</router-link> |
      <router-link to="/dayOne">dayOne</router-link> |
      <router-link to="/dayTwo">dayTwo</router-link> |
      <router-link to="/dayThree">dayThree</router-link> |
      <router-link to="/dayFour">dayFour</router-link> |
      <router-link to="/dayFive">dayFive</router-link> |
      <router-link to="/daySix">daySix</router-link> |
      <router-link to="/daySeven">daySeven</router-link> |
      <router-link to="/dayEight">dayEight</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

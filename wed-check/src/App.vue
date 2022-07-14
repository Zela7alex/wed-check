<template>
  <div id="app">
    <div class="app-logo">
      <h1>WedCheck</h1>
      <img src="./assets/heart-logo.jpg" />
    </div>
    <h2>Bridezilla who?.. Not me.</h2>
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link :to="{ name: 'helpers' }">Helpers</router-link>|
      <router-link :to="{ name: 'tasks' }">Tasks</router-link>|
      <router-link :to="{ name: 'materials' }">Materials</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script></script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  box-sizing: border-box;
  width: 500px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  font-weight: bold;
}
h2 {
  font-size: 1.5rem;
}
h2,
h3,
h4,
h5,
h6 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: extra bold;
  color: rgb(88, 184, 184);
  padding-right: 5px;
}

nav a.router-link-exact-active {
  color: rgb(74, 167, 207);
}
.search {
  text-align: center;
}
.btn {
  cursor: pointer;
}
div .app-logo {
  display: inline-block;
  line-height: 0.5;
  margin-top: 20%;
}
.app-logo h1 {
  float: left;
  width: 350px;
  margin-right: -70px;
  margin-left: -60px;
}
.app-logo img {
  float: right;
  width: 30px;
  padding-left: none;
  margin-top: 12.5%;
}
</style>

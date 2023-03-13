<template>
  <div id="app">
    <div class="app-logo">
      <h1>WedCheck</h1>
      <img src="./assets/heart-check-white.png" />
    </div>
    <h2 id="catch-phrase">Bridezilla who?.. Not me.</h2>
    <BaseTimer date="July 30th, 2022" />
    <nav>
      <router-link class="nav-link" to="/">Home</router-link>|
      <router-link class="nav-link" :to="{ name: 'helpers' }"
        >Helpers</router-link
      >|
      <router-link class="nav-link" :to="{ name: 'tasks' }">Tasks</router-link>|
      <router-link class="nav-link" :to="{ name: 'materials' }"
        >Materials</router-link
      >
    </nav>
    <main class="App__main">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseTimer from '@/components/BaseTimer.vue'
export default {
  components: {
    BaseTimer,
  },
  methods: {
    ...mapActions({
      initializeHelpers: 'initializeHelpers',
      initializeTasks: 'initializeTasks',
      initializeMaterials: 'initializeMaterials',
    }),
  },
  created() {
    this.initializeHelpers(this.$store)
    this.initializeTasks(this.$store)
    this.initializeMaterials(this.$store)
  },
  props: {
    duration: {
      type: [Number, Object],
      default: 300,
    },
    group: Boolean,
    tag: {
      type: String,
      default: 'span',
    },
    origin: {
      type: String,
      default: '',
    },
    styles: {
      type: Object,
      default: () => {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out',
        }
      },
    },
  },
}
</script>

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
  background-image: url('/src/assets/blue-white-flowers.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
#app {
  box-sizing: border-box;
  width: 20em;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 250, 241, 0.4);
  border-radius: 5px;
  margin-top: 4em;
  padding-bottom: 1em;
  box-shadow: 0.5px 0.7px 3px 1px rgb(176, 174, 174);
  max-height: 45em;
  overflow-y: auto;
  overflow-x: none;
}
h1 {
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  font-weight: bold;
  color: rgb(255, 255, 255, 0.9);
  text-shadow: rgb(175, 188, 190) 2px 3px 1px;
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
  color: rgb(133, 110, 84);
}

nav a {
  font-weight: extra bold;
  color: rgb(88, 184, 184);
  padding-right: 5px;
}
nav a:hover {
  padding: 8px;
  background: rgba(242, 236, 221, 0.3);
  border-radius: 5px;
  text-decoration: none;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

nav a.router-link-exact-active {
  color: rgb(105, 132, 144);
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
  margin-top: 10%;
}
.app-logo h1 {
  float: left;
  width: 350px;
  margin-right: -85px;
  margin-left: -50px;
  padding-right: none;
}
.app-logo img {
  float: right;
  width: 50px;
  padding-left: none;
  margin-top: 9%;
  text-shadow: rgb(175, 188, 190) 2px 3px 1px;
}
#catch-phrase {
  color: rgb(213, 246, 249);
  text-shadow: rgb(222, 216, 203) 1px 1px 0.5px;
}
.nav-link {
  text-decoration: none;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

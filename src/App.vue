<template>
  <router-view/>
</template>

<script>
import settings from '@/store';
import { provide } from 'vue';

export default {
  setup() {
    provide('settings', settings);
  },
};
</script>

<style>
.html{
  background: #2c3e50;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #292D32;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

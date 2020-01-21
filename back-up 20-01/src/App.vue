<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <MainComponent />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MainComponent from "./components/MainComponent";

export default {
  name: "app",
  components: {
    // HelloWorld,
    MainComponent
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#form {
  margin: 0 auto;
}
p {
  margin-bottom: 2px !important;
}
</style>

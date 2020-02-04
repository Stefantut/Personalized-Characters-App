<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <FirstChild />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import FirstChild from "./components/FirstChild";

export default {
  name: "app",
  components: {
    // HelloWorld,
    FirstChild
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

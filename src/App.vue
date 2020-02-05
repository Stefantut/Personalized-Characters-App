<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <FirstChild
      v-on:genderPassed="updateGender"
      v-on:namePassed="updateName"
      v-on:skinPassed="updateSkin"
      v-on:glassesPassed="updateGlasses"
    />

    {{firstChild.gender}}
    {{firstChild.name}}
    {{firstChild.skin}}
    {{firstChild.glasses}}
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import FirstChild from "./components/FirstChild";

export default {
  name: "app",
  data: function() {
    return {
      firstChild: {
        name: "",
        gender: "",
        skin: "",
        glasses: ""
      }
    };
  },
  methods: {
    updateName(data) {
      this.firstChild.name = data;
    },
    updateGender(data) {
      this.firstChild.gender = data;
    },
    updateSkin(data) {
      this.firstChild.skin = data;
    },
    updateGlasses(data) {
      this.firstChild.glasses = data;
    }
  },
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

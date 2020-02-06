<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <FirstChild
      v-on:genderPassed="updateGender"
      v-on:namePassed="updateName"
      v-on:skinPassed="updateSkin"
      v-on:glassesPassed="updateGlasses"
      v-on:hairTypePassed="updateHairType"
      v-on:hairColorPassed="updateHairColor"
      v-on:eyeShapePassed="updateEyeShape"
      v-on:eyeColorPassed="updateEyeColor"
    />
    <div class="final-selection">
      <p>
        Your personalized child name is {{firstChild.name}}, and it is a {{firstChild.gender}}.
        Has {{firstChild.skin}} and {{firstChild.glasses}}. The hair is {{firstChild.hairColor}} with {{firstChild.hairType}}. The eyes are {{firstChild.eyeColor}} with shape {{firstChild.eyeShape}}
      </p>
      <span></span>
    </div>
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
        glasses: "",
        hairType: "",
        hairColor: "",
        eyeShape: "",
        eyeColor: ""
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
    },
    updateHairType(data) {
      this.firstChild.hairType = data;
    },
    updateHairColor(data) {
      this.firstChild.hairColor = data;
    },
    updateEyeShape(data) {
      this.firstChild.eyeShape = data;
    },
    updateEyeColor(data) {
      this.firstChild.eyeColor = data;
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

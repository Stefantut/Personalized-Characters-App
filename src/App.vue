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
    <FirstParent />>
    <!-- Display Selected items for child -->
    <div id="selected">
      <transition name="fade">
        <h5
          class="first-child font-bold text-success"
          v-if="firstChild.gender || firstChild.name"
        >Selected Child Details:</h5>
      </transition>
      <transition name="fade">
        <p class="gender-selected font-weight-bold mb-0" v-if="firstChild.gender">
          Gender:
          <span class="font-weight-normal">{{ firstChild.gender }}</span>
        </p>
      </transition>
      <transition name="fade">
        <p class="name-selected font-weight-bold mb-0" v-if="firstChild.name">
          Name:
          <span class="font-weight-normal">{{ firstChild.name }}</span>
        </p>
      </transition>
      <transition name="fade">
        <p class="skin-selected font-weight-bold mb-0" v-if="firstChild.skin">
          Skin tone:
          <span class="font-weight-normal">{{ firstChild.skin }}</span>
        </p>
      </transition>
      <transition name="fade">
        <p class="eyecolor-selected font-weight-bold mb-0" v-if="firstChild.glasses">
          Glasses:
          <span class="font-weight-normal">{{ firstChild.glasses }}</span>
        </p>
      </transition>
      <transition name="fade">
        <p class="hairtype-selected font-weight-bold mb-0" v-if="firstChild.hairType">
          Hair type:
          <span class="font-weight-normal">{{ firstChild.hairType }}</span>
        </p>
      </transition>
      <transition name="fade">
        <p class="haircolor-selected font-weight-bold mb-0" v-if="firstChild.hairColor">
          Hair color:
          <span class="font-weight-normal">{{ firstChild.hairColor }}</span>
        </p>
      </transition>
      <transition name="fade">
        <p class="eyeshape-selected font-weight-bold mb-0" v-if="firstChild.eyeShape">
          Eye shape:
          <span class="font-weight-normal">{{ firstChild.eyeShape }}</span>
        </p>
      </transition>
      <transition name="fade">
        <p class="eyecolor-selected font-weight-bold mb-0" v-if="firstChild.eyeColor">
          Eye color:
          <span class="font-weight-normal">{{ firstChild.eyeColor }}</span>
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import FirstChild from "./components/FirstChild";
import FirstParent from "./components/FirstParent";

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
    FirstChild,
    FirstParent
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#selected {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 50px;
  .name-selected {
    text-transform: capitalize;
  }
}
/* Pretty fix  */
.pretty.p-round .state label:before,
label:after {
  opacity: 0;
  pointer-events: none;
}

.pretty {
  margin-right: 0 !important;
  transform: translateX(-15px);
}

.pretty .state label {
  margin: 0;
  display: flex;
}
</style>

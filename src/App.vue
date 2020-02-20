<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TopMessage />
    <transition name="fade" appear>
      <FirstChild
        v-on:genderPassed="updateGender"
        v-on:namePassed="updateName"
        v-on:skinPassed="updateSkin"
        v-on:glassesPassed="updateGlasses"
        v-on:hairTypePassed="updateHairType"
        v-on:hairColorPassed="updateHairColor"
        v-on:eyeShapePassed="updateEyeShape"
        v-on:eyeColorPassed="updateEyeColor"
        v-on:childHidden="updateHiddenChild"
        v-on:showSpinner="updateShowSpinner"
      />
    </transition>

    <ShowSpinner v-if="showSpinner" />

    <!-- here is your application code -->
    <transition name="fade" appear mode="out-in">
      <FirstParent
        v-on:parentGenderPassed="updateParentGender"
        v-on:parentNamePassed="updateParentName"
        v-on:parentSkinPassed="updateParentSkin"
        v-on:parentGlassesPassed="updateParentGlasses"
        v-on:parentHairTypePassed="updateParentHairType"
        v-on:parentHairColorPassed="updateParentHairColor"
        v-on:parentEyeShapePassed="updateParentEyeShape"
        v-on:parentEyeColorPassed="updateParentEyeColor"
        v-on:parentMaleBeardPassed="updateParentMaleBeard"
        :isHiddenChild="firstChild.isHidden"
      />
    </transition>
    <!-- Display Selected items for child -->
    <div class="selected-items">
      <!-- Component Title -->
      <h3
        class="component-title text-success"
        v-if="firstChild.gender || firstChild.name"
      >What you have selected:</h3>
      <div class="display-selected">
        <div id="selectedChild">
          <transition name="fade">
            <h4
              class="first-child selected-title text-success"
              v-if="firstChild.gender || firstChild.name"
            >Child Details:</h4>
          </transition>
          <transition name="fade">
            <p class="gender-selected font-weight-bold option mb-0" v-if="firstChild.gender">
              Gender:
              <span class="font-weight-normal">{{ firstChild.gender }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="name-selected font-weight-bold option mb-0" v-if="firstChild.name">
              Name:
              <span class="font-weight-normal">{{ firstChild.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="skin-selected font-weight-bold option mb-0" v-if="firstChild.skin">
              Skin tone:
              <span class="font-weight-normal">{{ firstChild.skin }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="glasses-selected font-weight-bold option mb-0" v-if="firstChild.glasses">
              Glasses:
              <span class="font-weight-normal">{{ firstChild.glasses }}</span>
            </p>
          </transition>

          <transition name="fade">
            <p class="hairtype-selected font-weight-bold option mb-0" v-if="firstChild.hairType">
              Hair type:
              <span class="font-weight-normal">{{ firstChild.hairType }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="haircolor-selected font-weight-bold option mb-0" v-if="firstChild.hairColor">
              Hair color:
              <span class="font-weight-normal">{{ firstChild.hairColor }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyeshape-selected font-weight-bold option mb-0" v-if="firstChild.eyeShape">
              Eye shape:
              <span class="font-weight-normal">{{ firstChild.eyeShape }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyecolor-selected font-weight-bold option mb-0" v-if="firstChild.eyeColor">
              Eye color:
              <span class="font-weight-normal">{{ firstChild.eyeColor }}</span>
            </p>
          </transition>
        </div>
        <div id="selectedParent">
          <transition name="fade">
            <h4
              class="first-child selected-title text-success"
              v-if="firstParent.gender || firstParent.name"
            >Parent Details:</h4>
          </transition>
          <transition name="fade">
            <p class="gender-selected font-weight-bold option mb-0" v-if="firstParent.gender">
              Gender:
              <span class="font-weight-normal">{{ firstParent.gender }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="name-selected font-weight-bold option mb-0" v-if="firstParent.name">
              Name:
              <span class="font-weight-normal">{{ firstParent.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="skin-selected font-weight-bold option mb-0" v-if="firstParent.skin">
              Skin tone:
              <span class="font-weight-normal">{{ firstParent.skin }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyecolor-selected font-weight-bold option mb-0" v-if="firstParent.glasses">
              Glasses:
              <span class="font-weight-normal">{{ firstParent.glasses }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p
              class="beard-selected font-weight-bold option mb-0"
              v-if="firstParent.maleBeard && firstParent.gender =='Male'"
            >
              Beard:
              <span class="font-weight-normal">{{ firstParent.maleBeard }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="hairtype-selected font-weight-bold option mb-0" v-if="firstParent.hairType">
              Hair type:
              <span class="font-weight-normal">{{ firstParent.hairType }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="haircolor-selected font-weight-bold option mb-0" v-if="firstParent.hairColor">
              Hair color:
              <span class="font-weight-normal">{{ firstParent.hairColor }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyeshape-selected font-weight-bold option mb-0" v-if="firstParent.eyeShape">
              Eye shape:
              <span class="font-weight-normal">{{ firstParent.eyeShape }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyecolor-selected font-weight-bold option mb-0" v-if="firstParent.eyeColor">
              Eye color:
              <span class="font-weight-normal">{{ firstParent.eyeColor }}</span>
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TopMessage from "./components/TopMessage";
import FirstChild from "./components/FirstChild";
import FirstParent from "./components/FirstParent";
import ShowSpinner from "./components/ShowSpinner";

export default {
  name: "app",
  data: function() {
    return {
      showSpinner: false,
      firstChild: {
        name: "",
        gender: "",
        skin: "",
        glasses: "",
        hairType: "",
        hairColor: "",
        eyeShape: "",
        eyeColor: "",
        isHidden: false
      },
      firstParent: {
        name: "",
        gender: "",
        skin: "",
        glasses: "",
        maleBeard: "",
        hairType: "",
        hairColor: "",
        eyeShape: "",
        eyeColor: ""
      }
    };
  },
  mounted() {},
  created() {},
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
    },
    updateHiddenChild(data) {
      setTimeout(() => {
        this.firstChild.isHidden = data;
      }, 900);
    },

    updateParentName(data) {
      this.firstParent.name = data;
    },
    updateParentGender(data) {
      this.firstParent.gender = data;
    },
    updateParentSkin(data) {
      this.firstParent.skin = data;
    },
    updateParentGlasses(data) {
      this.firstParent.glasses = data;
    },
    updateParentMaleBeard(data) {
      this.firstParent.maleBeard = data;
    },
    updateParentHairType(data) {
      this.firstParent.hairType = data;
    },
    updateParentHairColor(data) {
      this.firstParent.hairColor = data;
    },
    updateParentEyeShape(data) {
      this.firstParent.eyeShape = data;
    },
    updateParentEyeColor(data) {
      this.firstParent.eyeColor = data;
    },
    updateShowSpinner(data) {
      this.showSpinner = data;
      setTimeout(() => {
        this.showSpinner = false;
      }, 900);
    }
  },
  components: {
    // HelloWorld,
    TopMessage,
    FirstChild,
    FirstParent,
    ShowSpinner
  }
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>

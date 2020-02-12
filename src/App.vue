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
    <FirstParent
      v-on:parentGenderPassed="updateParentGender"
      v-on:parentNamePassed="updateParentName"
      v-on:parentSkinPassed="updateParentSkin"
      v-on:parentGlassesPassed="updateParentGlasses"
      v-on:parentHairTypePassed="updateParentHairType"
      v-on:parentHairColorPassed="updateParentHairColor"
      v-on:parentEyeShapePassed="updateParentEyeShape"
      v-on:parentEyeColorPassed="updateParentEyeColor"
    />
    <!-- Display Selected items for child -->
    <div class="selected-items">
      <div id="selectedChild">
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
      <div id="selectedParent">
        <transition name="fade">
          <h5
            class="first-child font-bold text-success"
            v-if="firstParent.gender || firstParent.name"
          >Selected Parent Details:</h5>
        </transition>
        <transition name="fade">
          <p class="gender-selected font-weight-bold mb-0" v-if="firstParent.gender">
            Gender:
            <span class="font-weight-normal">{{ firstParent.gender }}</span>
          </p>
        </transition>
        <transition name="fade">
          <p class="name-selected font-weight-bold mb-0" v-if="firstParent.name">
            Name:
            <span class="font-weight-normal">{{ firstParent.name }}</span>
          </p>
        </transition>
        <transition name="fade">
          <p class="skin-selected font-weight-bold mb-0" v-if="firstParent.skin">
            Skin tone:
            <span class="font-weight-normal">{{ firstParent.skin }}</span>
          </p>
        </transition>
        <transition name="fade">
          <p class="eyecolor-selected font-weight-bold mb-0" v-if="firstParent.glasses">
            Glasses:
            <span class="font-weight-normal">{{ firstParent.glasses }}</span>
          </p>
        </transition>
        <transition name="fade">
          <p class="hairtype-selected font-weight-bold mb-0" v-if="firstParent.hairType">
            Hair type:
            <span class="font-weight-normal">{{ firstParent.hairType }}</span>
          </p>
        </transition>
        <transition name="fade">
          <p class="haircolor-selected font-weight-bold mb-0" v-if="firstParent.hairColor">
            Hair color:
            <span class="font-weight-normal">{{ firstParent.hairColor }}</span>
          </p>
        </transition>
        <transition name="fade">
          <p class="eyeshape-selected font-weight-bold mb-0" v-if="firstParent.eyeShape">
            Eye shape:
            <span class="font-weight-normal">{{ firstParent.eyeShape }}</span>
          </p>
        </transition>
        <transition name="fade">
          <p class="eyecolor-selected font-weight-bold mb-0" v-if="firstParent.eyeColor">
            Eye color:
            <span class="font-weight-normal">{{ firstParent.eyeColor }}</span>
          </p>
        </transition>
      </div>
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
      },
      firstParent: {
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
@import "./scss/_variables.scss";
@import "./scss/_mixins.scss";
@import "./scss/_fonts.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  .wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 50px;
    #form {
      max-width: 800px;
      width: 100%;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;
      #view {
        height: 350px;
        width: 350px;
        background-color: #ffefe2;
        margin-right: 50px;
        border-radius: 10px;
        border: 1px solid #8ba68f;
        display: flex;
        justify-content: center;
        position: relative;
        .img-view {
          height: 300px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
        .img-skin-tone {
          z-index: 1;
        }
        .img-hair-type {
          z-index: 2;
        }
        .img-hair-color {
          z-index: 3;
        }
        .img-eye-color {
          z-index: 4;
        }
        .img-glasses {
          z-index: 5;
        }
      }
      .form-container {
        width: 300px;
        .error {
          color: red;
        }
        .step {
          height: 230px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 30px;
          .step-number-wrap {
            position: absolute;
            top: 0px;
            left: 0;
            font-weight: 600;
            display: flex;
            .step-number {
              font-size: 18px;
              border-radius: 10px;
              border: 1px solid #8ba68f;
              padding: 0 5px;
              background-color: #ffefe2;
              sup {
                font-size: 12px;
                margin-left: -4px;
              }
            }
            .step-text {
              font-size: 20px;
              margin-left: 5px;
              font-family: $firstFont;
              font-weight: $medium;
            }
          }
          .svg {
            height: 30px;
          }
          .svg-2 {
            height: 20px;
          }
        }
        .buttons {
          display: grid;
          grid-template-columns: 0.5fr 1fr;
          grid-template-rows: auto;
          grid-template-areas: "left-btn right-btn";
          grid-column-gap: 15%;
          .prev {
            grid-area: left-btn;
          }
          .next,
          .send {
            grid-area: right-btn;
          }
        }
      }
    }
  }

  .selected-items {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 30px;
    display: flex;
    justify-content: space-between;
    #selectedChild,
    #selectedParent {
      .name-selected {
        text-transform: capitalize;
      }
    }
  }
}

// Transitions

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// Fixes
.block {
  display: block !important;
}

.b-wrap {
  padding: 0 !important;
}
.all-boxes-wrap {
  width: 90%;
  .all-boxes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    transform: translateX(20px);
    li {
      list-style-type: none;
    }
  }
}

// Others
.active {
  background: #f00;
  color: #fff;
  font-size: 30px;
}

.pulse {
  background: transparent;
  border-radius: 50%;
  margin: 20px;
  height: 40px;
  width: 40px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}

// KeyFrames
@keyframes rotateee {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
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

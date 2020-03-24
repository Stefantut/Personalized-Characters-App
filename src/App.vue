<template>
  <div id="app">
    <!-- Top Header Component -->
    <TopMessage />
    <!-- Cart Buttons Component -->
    <CartButtons />

    <!-- First Child Component -->
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

    <!-- Spinner Componet - Loading -->
    <ShowSpinner v-if="showSpinner" />
    <!-- First Parent Component -->
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
        v-on:parentHidden="updateHiddenParent"
        v-on:showSpinner="updateShowSpinner"
        :isHiddenChild="firstChild.isHidden"
      />
    </transition>
    <!-- Buy Component -->
    <transition name="fade" appear>
      <BuyComponent :isHiddenChild="firstChild.isHidden" :isHiddenParent="firstParent.isHidden" />
    </transition>
    <!-- Display Selected items for child -->
    <div class="selected-items" v-if="firstChild.gender || firstChild.name">
      <!-- Component Title -->
      <h3 class="component-title">What you have selected:</h3>
      <div class="display-selected">
        <div id="selectedChild" class="selected">
          <transition name="fade">
            <h4 class="selected__title" v-if="firstChild.gender || firstChild.name">Child Details:</h4>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--gender" v-if="firstChild.gender">
              Gender:
              <span class="selected__item__text">{{ firstChild.gender }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--name" v-if="firstChild.name">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Name:
              <span class="selected__item__text">{{ firstChild.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--skin" v-if="firstChild.skin">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Skin tone:
              <span class="selected__item__text">{{ firstChild.skin }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--glasses" v-if="firstChild.glasses">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Glasses:
              <span class="selected__item__text">{{ firstChild.glasses }}</span>
            </p>
          </transition>

          <transition name="fade">
            <p class="selected__item selected__item--hairtype" v-if="firstChild.hairType">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Hair type:
              <span class="selected__item__text">{{ firstChild.hairType }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--haircolor" v-if="firstChild.hairColor">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Hair color:
              <span class="selected__item__text">{{ firstChild.hairColor }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--eyeshape" v-if="firstChild.eyeShape">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Eye shape:
              <span class="selected__item__text">{{ firstChild.eyeShape }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--eyecolor" v-if="firstChild.eyeColor">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Eye color:
              <span class="selected__item__text">{{ firstChild.eyeColor }}</span>
            </p>
          </transition>
        </div>
        <div id="selectedParent" class="selected">
          <transition name="fade">
            <h4
              class="selected__title"
              v-if="firstParent.gender || firstParent.name"
            >Parent Details:</h4>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--gender" v-if="firstParent.gender">
              Gender:
              <span class="selected__item__text">{{ firstParent.gender }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--name" v-if="firstParent.name">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Name:
              <span class="selected__item__text">{{ firstParent.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--skin" v-if="firstParent.skin">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Skin tone:
              <span class="selected__item__text">{{ firstParent.skin }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--glasses" v-if="firstParent.glasses">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Glasses:
              <span class="selected__item__text">{{ firstParent.glasses }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p
              class="selected__item selected__item--beard"
              v-if="firstParent.maleBeard && firstParent.gender =='Male'"
            >
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Beard:
              <span class="selected__item__text">{{ firstParent.maleBeard }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--hairtype" v-if="firstParent.hairType">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Hair type:
              <span class="selected__item__text">{{ firstParent.hairType }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--haircolor" v-if="firstParent.hairColor">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Hair color:
              <span class="selected__item__text">{{ firstParent.hairColor }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--eyeshape" v-if="firstParent.eyeShape">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Eye shape:
              <span class="selected__item__text">{{ firstParent.eyeShape }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="selected__item selected__item--eyecolor" v-if="firstParent.eyeColor">
              <span class="selected__item__divider">&nbsp;+&nbsp;</span>Eye color:
              <span class="selected__item__text">{{ firstParent.eyeColor }}</span>
            </p>
          </transition>
        </div>
      </div>
    </div>
    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>
    
<script>
import TopMessage from "./components/TopMessage";
import CartButtons from "./components/CartButtons";
import FirstChild from "./components/FirstChild";
import FirstParent from "./components/FirstParent";
import BuyComponent from "./components/BuyComponent";
import ShowSpinner from "./components/ShowSpinner";
import FooterComponent from "./components/FooterComponent";

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
        eyeColor: "",
        isHidden: false
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
    //Spinner component - loading
    updateShowSpinner(data) {
      this.showSpinner = data;
      setTimeout(() => {
        this.showSpinner = false;
      }, 900);
    },
    updateHiddenParent(data) {
      setTimeout(() => {
        this.firstParent.isHidden = data;
      }, 900);
    }
  },
  components: {
    TopMessage,
    CartButtons,
    FirstChild,
    FirstParent,
    BuyComponent,
    ShowSpinner,
    FooterComponent
  }
};
</script>
<style lang="scss">
@import "./scss/app.scss";
@import "./scss/customsnipcart.scss";
</style>

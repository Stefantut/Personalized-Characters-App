<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TopMessage />
    <div class="cart snipcart-checkout">
      <div class="cart__items">
        <img src="./assets/shopping-bag.svg" alt="shopping-bag" />
        <span class="snipcart-items-count"></span>
      </div>

      <img src="./assets/cart.svg" alt="cart" class="cart-image" />
      <span class="snipcart-total-price"></span>
    </div>
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
    <FooterComponent />
  </div>
</template>
    
<script>
import TopMessage from "./components/TopMessage";
import FirstChild from "./components/FirstChild";
import FirstParent from "./components/FirstParent";
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
    ShowSpinner,
    FooterComponent
  }
};
</script>
<style lang="scss">
@import "./scss/app.scss";
.cart {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  .cart__items {
    display: flex;
    align-items: flex-start;
    img {
      width: 20px;
      margin-right: 3px;
    }
  }
  .cart-image {
    margin: 0 10px;
    width: 20px;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>

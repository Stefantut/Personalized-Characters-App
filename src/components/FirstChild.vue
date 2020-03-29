<template>
  <div class="wrapper" v-if="!isHidden">
    <form id="form">
      <!-- Component Title -->
      <h3 class="component-title text-success">Let's create the child first:</h3>
      <!-- Display images -->
      <div id="view">
        <!-- Start Default Images -->
        <!-- Default Skin -->
        <img
          :src="form.defaultGirlSkin"
          alt="default-skin"
          class="img-view img-skin-tone"
          v-if="form.gender === 'Girl'"
        />
        <img :src="form.defaultBoySkin" alt="default-skin" class="img-view img-skin-tone" v-else />
        <!-- Default Hair -->
        <div class="default-hair">
          <!-- Visible before selecting Girl hair color -->
          <img
            :src="form.defaultGirlHair"
            alt="default-hair"
            class="img-view img-hair-color"
            v-if="form.gender === 'Girl' && !defaultHairHidden"
          />
          <!-- Visible before selecting Boy hair color -->
          <img
            :src="form.defaultBoyHair"
            alt="default-hair"
            class="img-view img-hair-color"
            v-else-if="!defaultHairHidden"
          />
        </div>
        <div class="selected-color-hair">
          <!-- Visible after selecting Girl hair color -->
          <img
            :src="form.hairColor.selectedHair"
            alt="default-hair"
            class="img-view img-hair-color"
            v-if="form.gender === 'Girl' && defaultHairHidden  && !selectedHairHidden"
          />
          <!-- Visible after selecting Boy hair color -->
          <img
            :src="form.hairColor.selectedHair"
            alt="default-hair"
            class="img-view img-hair-color"
            v-else-if="defaultHairHidden && !selectedHairHidden"
          />
        </div>
        <!-- Default Eyes -->
        <img
          :src="form.defaultEyes"
          alt="default-eyes"
          class="img-view img-eye-color"
          v-if="!defaultEyesHidden"
        />
        <img
          :src="form.eyeColor.selectedEyes"
          alt="default-eyes"
          class="img-view img-eye-color"
          v-if="defaultEyesHidden && !selectedEyesHidden"
        />
        <!--End Default Images -->

        <!-- Display skin -->
        <img :src="form.skin.image" :alt="form.skin.name" class="img-view img-skin-tone" />
        <!-- Display hair -->
        <div v-for="image in form.hairColor.image" :key="image.id">
          <img
            :src="image.imageSource"
            class="img-view img-hair-color"
            v-if="form.hairType.id == image.id"
          />
        </div>
        <!-- Display eyes -->
        <div v-for="image in form.eyeColor.image" :key="image.id">
          <img
            :src="image.imageSource"
            class="img-view img-eye-color"
            v-if="form.eyeShape.id == image.id"
          />
        </div>
        <!-- Display glasses -->
        <img :src="form.glasses.image" :alt="form.glasses.name" class="img-view img-glasses" />
      </div>
      <div class="form-content">
        <transition name="fade-less" mode="out-in">
          <!-- Step 1 -->
          <section class="step gender name" v-if="step == 1">
            <div class="step-number-wrap text-success">
              <p class="step-number">
                {{ step }}
                <sup>st</sup>
              </p>
              <p class="step-text">Step</p>
            </div>
            <!-- using direct svg file -->
            <div class="gender flex justify-center mb-5">
              <h5 class="pt-2 pb-3 flex">Select Child's Gender</h5>

              <p-input
                type="radio"
                class="p-icon p-jelly p-round p-bigger ml-4 mr-1"
                id="boy"
                value="Boy"
                v-model="form.gender"
                name="boy"
              >
                <label class="d-flex align-items-center">
                  Boy
                  <img src="/img/man.svg" class="svg ml-2" />
                </label>
              </p-input>

              <p-input
                class="p-icon p-jelly p-round p-bigger ml-5"
                type="radio"
                id="girl"
                value="Girl"
                v-model="form.gender"
                name="girl"
              >
                <label class="d-flex flex-row-reverse align-items-center">
                  Girl
                  <img src="/img/woman.svg" class="svg mr-2" />
                </label>
              </p-input>
            </div>
            <!-- First Name -->
            <input
              v-model="form.firstName"
              type="text"
              placeholder="Type in first name?"
              class="first-name form-control form-control-md"
            />
          </section>

          <!-- Step 2 -->
          <section class="step skin-glasses" v-if="step == 2">
            <!-- using direct svg file -->
            <div class="step-number-wrap text-success">
              <p class="step-number">
                {{ step }}
                <sup>nd</sup>
              </p>
              <p class="step-text">Step</p>
            </div>
            <div class="skin-tone all-boxes-wrap flex-col py-1">
              <h5 class="pt-2 pb-1 flex text-center">Select your Skin Tone</h5>
              <div class="skin-tone-boxes">
                <ul class="all-boxes" v-if="form.gender === 'Boy'">
                  <li v-for="(skinInfo, index) in form.skinToneBoy" :key="index">
                    <p-input
                      class="p-icon p-jelly p-round p-bigger"
                      type="radio"
                      :id="skinInfo.name"
                      :name="skinInfo.name"
                      v-model="form.skin"
                      :value="skinInfo"
                    >
                      <img :src="skinInfo.iconSource" class="svg-2" />
                    </p-input>
                  </li>
                </ul>

                <ul class="all-boxes" v-else>
                  <li v-for="(skinInfo, index) in form.skinToneGirl" :key="index">
                    <p-input
                      class="p-icon p-jelly p-round p-bigger"
                      type="radio"
                      :id="skinInfo.name"
                      :name="skinInfo.name"
                      v-model="form.skin"
                      :value="skinInfo"
                    >
                      <img :src="skinInfo.iconSource" class="svg-2" />
                    </p-input>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Glasses -->
            <div class="glasses all-boxes-wrap flex-col py-1">
              <h5 class="pt-2 pb-1 flex text-center">Glasses?</h5>
              <div class="glasses-boxes">
                <ul class="all-boxes">
                  <li v-for="(glasses, index) in form.glassesType" :key="index">
                    <p-input
                      class="p-icon p-jelly p-round p-bigger"
                      type="radio"
                      :id="glasses.name"
                      :name="glasses.name"
                      v-model="form.glasses"
                      :value="glasses"
                    >
                      <img :src="glasses.iconSource" class="svg-2-bigger" />
                    </p-input>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Step 3 -->
          <section class="step hair" v-if="step == 3">
            <div class="step-number-wrap text-success">
              <p class="step-number">
                {{ step }}
                <sup>rd</sup>
              </p>

              <p class="step-text">Step</p>
            </div>

            <div class="hair-color all-boxes-wrap flex-col py-1">
              <h5 class="pt-2 pb-1 flex text-center">Select your Hair Color</h5>
              <div class="hair-color-boxes">
                <ul class="all-boxes" v-if="form.gender === 'Boy'">
                  <li
                    v-for="(hairColor, index) in form.hairColorBoy"
                    :key="index"
                    v-on:click="defaultHairHidden = true; hairOptionsHidden = true "
                  >
                    <p-input
                      class="p-icon p-jelly p-round p-bigger"
                      type="radio"
                      :id="hairColor.name"
                      :name="hairColor.name"
                      v-model="form.hairColor"
                      :value="hairColor"
                    >
                      <img :src="hairColor.iconSource" class="svg-2" />
                    </p-input>
                  </li>
                </ul>

                <ul class="all-boxes" v-else>
                  <li
                    v-for="(hairColor, index) in form.hairColorGirl"
                    :key="index"
                    v-on:click="defaultHairHidden = true; hairOptionsHidden = true"
                  >
                    <p-input
                      class="p-icon p-jelly p-round p-bigger"
                      type="radio"
                      :id="hairColor.name"
                      :name="hairColor.name"
                      v-model="form.hairColor"
                      :value="hairColor"
                    >
                      <img :src="hairColor.iconSource" class="svg-2" />
                    </p-input>
                  </li>
                </ul>
              </div>
            </div>

            <transition name="fade" mode="out-in">
              <div class="hair-type all-boxes-wrap flex-col py-1" v-if="hairOptionsHidden">
                <h5 class="pt-2 pb-1 flex text-center">Select your Hair Type</h5>
                <div class="hair-type-boxes">
                  <ul class="all-boxes" v-if="form.gender === 'Boy'">
                    <li
                      v-for="(hairType, index) in form.hairTypeBoy"
                      :key="index"
                      v-on:click="selectedHairHidden = true"
                    >
                      <p-input
                        class="p-icon p-jelly p-round p-bigger"
                        type="radio"
                        :id="hairType.name"
                        :name="hairType.name"
                        v-model="form.hairType"
                        :value="hairType"
                      >
                        <img :src="hairType.iconSource" class="svg-2-bigger" />
                      </p-input>
                    </li>
                  </ul>

                  <ul class="all-boxes" v-else>
                    <li
                      v-for="(hairType, index) in form.hairTypeGirl"
                      :key="index"
                      v-on:click="selectedHairHidden = true"
                    >
                      <p-input
                        class="p-icon p-jelly p-round p-bigger"
                        type="radio"
                        :id="hairType.name"
                        :name="hairType.name"
                        v-model="form.hairType"
                        :value="hairType"
                      >
                        <img :src="hairType.iconSource" class="svg-2-bigger" />
                      </p-input>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </section>

          <!-- Step 4 -->
          <section class="step eye" v-if="step == 4">
            <div class="step-number-wrap text-success">
              <p class="step-number">
                {{ step }}
                <sup>th</sup>
              </p>

              <p class="step-text">Step</p>
            </div>

            <div class="eye-color all-boxes-wrap flex-col py-1">
              <h5 class="pt-2 pb-1 flex text-center">Select your Eye Color</h5>
              <div class="eye-color-boxes">
                <ul class="all-boxes" v-if="form.gender === 'Boy'">
                  <li
                    v-for="(eyeColor, index) in form.eyeColorBoy"
                    :key="index"
                    v-on:click="defaultEyesHidden = true; eyesOptionsHidden = true"
                  >
                    <p-input
                      class="p-icon p-jelly p-round p-bigger"
                      type="radio"
                      :id="eyeColor.name"
                      :name="eyeColor.name"
                      v-model="form.eyeColor"
                      :value="eyeColor"
                    >
                      <img :src="eyeColor.iconSource" class="svg-2" />
                    </p-input>
                  </li>
                </ul>

                <ul class="all-boxes" v-else>
                  <li
                    v-for="(eyeColor, index) in form.eyeColorGirl"
                    :key="index"
                    v-on:click="defaultEyesHidden = true; eyesOptionsHidden = true"
                  >
                    <p-input
                      class="p-icon p-jelly p-round p-bigger"
                      type="radio"
                      :id="eyeColor.name"
                      :name="eyeColor.name"
                      v-model="form.eyeColor"
                      :value="eyeColor"
                    >
                      <img :src="eyeColor.iconSource" class="svg-2" />
                    </p-input>
                  </li>
                </ul>
              </div>
            </div>

            <transition name="fade" mode="out-in">
              <div class="eye-shape all-boxes-wrap flex-col py-1" v-if="eyesOptionsHidden">
                <h5 class="pt-2 pb-1 flex text-center">Select your Eye Shape</h5>
                <div class="eye-shape-boxes">
                  <ul class="all-boxes" v-if="form.gender === 'Boy'">
                    <li
                      v-for="(eyeShape, index) in form.eyeShapeBoy"
                      :key="index"
                      v-on:click="selectedEyesHidden = true"
                    >
                      <p-input
                        class="p-icon p-jelly p-round p-bigger"
                        type="radio"
                        :id="eyeShape.name"
                        :name="eyeShape.name"
                        v-model="form.eyeShape"
                        :value="eyeShape"
                      >
                        <img :src="eyeShape.iconSource" class="svg-2-bigger" />
                      </p-input>
                    </li>
                  </ul>

                  <ul class="all-boxes" v-else>
                    <li
                      v-for="(eyeShape, index) in form.eyeShapeGirl"
                      :key="index"
                      v-on:click="selectedEyesHidden = true"
                    >
                      <p-input
                        class="p-icon p-jelly p-round p-bigger"
                        type="radio"
                        :id="eyeShape.name"
                        :name="eyeShape.name"
                        v-model="form.eyeShape"
                        :value="eyeShape"
                      >
                        <img :src="eyeShape.iconSource" class="svg-2-bigger" />
                      </p-input>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </section>
        </transition>
        <!-- Display error Message -->
        <div class="error text-center my-3">
          <transition-group name="fade" tag="span">
            <span
              v-for="(e, item) in errors"
              :key="item + 1"
              class="font-italic font-weight-normal"
            >{{ e }}</span>
          </transition-group>
          <!-- <span v-for="e in errors" class="font-italic font-weight-normal" :key="e.errors">{{ e }}</span> -->
        </div>
        <!-- Steps Buttons -->
        <section class="buttons">
          <!-- <button v-if="step != 1" @click.prevent="prevStep" class="prev btn btn-primary">Previous</button> -->
          <button
            v-if="step != 1 && step != 2"
            @click.prevent="prevStep"
            class="prev btn btn-primary"
          >Previous</button>
          <button
            v-if="step != totalsteps"
            @click.prevent="nextStep"
            class="next btn btn-success"
          >Continue</button>
          <button
            v-if="step == 4"
            @click.prevent="send"
            class="send btn btn-warning"
          >Continue to Parent</button>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
import PrettyCheckbox from "pretty-checkbox-vue";
import Vue from "vue";

Vue.use(PrettyCheckbox);

export default {
  name: "Child",
  data: function() {
    return {
      isHidden: false,
      step: 1,
      totalsteps: 4,
      errors: [],
      defaultHairHidden: false,
      defaultEyesHidden: false,
      selectedHairHidden: false,
      selectedEyesHidden: false,
      hairOptionsHidden: false,
      eyesOptionsHidden: false,
      form: {
        defaultBoySkin: require("@/img/boy/body-boy-3.png"),
        defaultGirlSkin: require("@/img/girl/body-girl-3.png"),
        defaultBoyHair: require("@/img/boy/hair-3-1.png"),
        defaultGirlHair: require("@/img/girl/hair-4-5.png"),
        defaultEyes: require("@/img/child/eyes/eyes-5-1.png"),
        gender: "",
        firstName: null,
        skin: "",
        //Skin Tone Boy
        skinToneBoy: [
          {
            name: "Warm Light",
            image: require("@/img/boy/body-boy-1.png"),
            iconSource: require("@/img/icons/ico-skin-1.svg"),
            gender: "Boy"
          },
          {
            name: "Light",
            image: require("@/img/boy/body-boy-2.png"),
            iconSource: require("@/img/icons/ico-skin-2.svg"),
            gender: "Boy"
          },
          {
            name: "Medium",
            image: require("@/img/boy/body-boy-3.png"),
            iconSource: require("@/img/icons/ico-skin-3.svg"),
            gender: "Boy"
          },
          {
            name: "Warm Dark",
            image: require("@/img/boy/body-boy-4.png"),
            iconSource: require("@/img/icons/ico-skin-4.svg"),
            gender: "Boy"
          },
          {
            name: "Dark",
            image: require("@/img/boy/body-boy-5.png"),
            iconSource: require("@/img/icons/ico-skin-5.svg"),
            gender: "Boy"
          }
        ],
        // Skin Tone Girl
        skinToneGirl: [
          {
            name: "Warm Light",
            image: require("@/img/girl/body-girl-1.png"),
            iconSource: require("@/img/icons/ico-skin-1.svg"),
            gender: "Girl"
          },
          {
            name: "Light",
            image: require("@/img/girl/body-girl-2.png"),
            iconSource: require("@/img/icons/ico-skin-2.svg"),
            gender: "Girl"
          },
          {
            name: "Medium",
            image: require("@/img/girl/body-girl-3.png"),
            iconSource: require("@/img/icons/ico-skin-3.svg"),
            gender: "Girl"
          },
          {
            name: "Warm Dark",
            image: require("@/img/girl/body-girl-4.png"),
            iconSource: require("@/img/icons/ico-skin-4.svg"),
            gender: "Girl"
          },
          {
            name: "Dark",
            image: require("@/img/girl/body-girl-5.png"),
            iconSource: require("@/img/icons/ico-skin-5.svg"),
            gender: "Girl"
          }
        ],
        //Glasses
        glasses: "",
        glassesType: [
          {
            name: "No Glasses",
            image: require("@/img/child/glasses/glasses-no.png"),
            iconSource: require("@/img/icons/father/ico-beard-1.svg")
          },
          {
            name: "Squares",
            image: require("@/img/child/glasses/glasses-1.png"),
            iconSource: require("@/img/icons/ico-glasses-2.svg")
          },
          {
            name: "Wayfarer",
            image: require("@/img/child/glasses/glasses-2.png"),
            iconSource: require("@/img/icons/ico-glasses-3.svg")
          },
          {
            name: "Rectangle",
            image: require("@/img/child/glasses/glasses-3.png"),
            iconSource: require("@/img/icons/ico-glasses-4.svg")
          },
          {
            name: "Rounds",
            image: require("@/img/child/glasses/glasses-4.png"),
            iconSource: require("@/img/icons/ico-glasses-5.svg")
          }
        ],
        hairType: "",
        // Hair Type Boy
        hairTypeBoy: [
          {
            name: "Option 1",
            iconSource: require("@/img/icons/boy/ico-hair-boy-1.svg"),
            id: 1
          },
          {
            name: "Option 2",
            iconSource: require("@/img/icons/boy/ico-hair-boy-2.svg"),
            id: 2
          },
          {
            name: "Option 3",
            iconSource: require("@/img/icons/boy/ico-hair-boy-3.svg"),
            id: 3
          },
          {
            name: "Option 4",
            iconSource: require("@/img/icons/boy/ico-hair-boy-4.svg"),
            id: 4
          },
          {
            name: "Option 5",
            iconSource: require("@/img/icons/boy/ico-hair-boy-5.svg"),
            id: 5
          }
        ],
        // Hair Type Girl
        hairTypeGirl: [
          {
            name: "Option 1",
            iconSource: require("@/img/icons/girl/ico-hair-girl-1.svg"),
            id: 1
          },
          {
            name: "Option 2",
            iconSource: require("@/img/icons/girl/ico-hair-girl-2.svg"),
            id: 2
          },
          {
            name: "Option 3",
            iconSource: require("@/img/icons/girl/ico-hair-girl-3.svg"),
            id: 3
          },
          {
            name: "Option 4",
            iconSource: require("@/img/icons/girl/ico-hair-girl-4.svg"),
            id: 4
          },
          {
            name: "Option 5",
            iconSource: require("@/img/icons/girl/ico-hair-girl-5.svg"),
            id: 5
          }
        ],
        hairColor: "",
        // Hair Color Boy
        hairColorBoy: [
          {
            name: "Blonde",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/boy/hair-1-1.png")
              },
              {
                id: 2,
                imageSource: require("@/img/boy/hair-2-1.png")
              },
              {
                id: 3,
                imageSource: require("@/img/boy/hair-3-1.png")
              },
              {
                id: 4,
                imageSource: require("@/img/boy/hair-4-1.png")
              },
              {
                id: 5,
                imageSource: require("@/img/boy/hair-5-1.png")
              }
            ],
            selectedHair: require("@/img/boy/hair-3-1.png"),
            iconSource: require("@/img/icons/ico-hair-color-1.svg")
          },
          {
            name: "Light Red",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/boy/hair-1-2.png")
              },
              {
                id: 2,
                imageSource: require("@/img/boy/hair-2-2.png")
              },
              {
                id: 3,
                imageSource: require("@/img/boy/hair-3-2.png")
              },
              {
                id: 4,
                imageSource: require("@/img/boy/hair-4-2.png")
              },
              {
                id: 5,
                imageSource: require("@/img/boy/hair-5-2.png")
              }
            ],
            selectedHair: require("@/img/boy/hair-3-2.png"),
            iconSource: require("@/img/icons/ico-hair-color-2.svg")
          },
          {
            name: "Dark Red",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/boy/hair-1-3.png")
              },
              {
                id: 2,
                imageSource: require("@/img/boy/hair-2-3.png")
              },
              {
                id: 3,
                imageSource: require("@/img/boy/hair-3-3.png")
              },
              {
                id: 4,
                imageSource: require("@/img/boy/hair-4-3.png")
              },
              {
                id: 5,
                imageSource: require("@/img/boy/hair-5-3.png")
              }
            ],
            selectedHair: require("@/img/boy/hair-3-3.png"),
            iconSource: require("@/img/icons/ico-hair-color-3.svg")
          },
          {
            name: "Brown",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/boy/hair-1-4.png")
              },
              {
                id: 2,
                imageSource: require("@/img/boy/hair-2-4.png")
              },
              {
                id: 3,
                imageSource: require("@/img/boy/hair-3-4.png")
              },
              {
                id: 4,
                imageSource: require("@/img/boy/hair-4-4.png")
              },
              {
                id: 5,
                imageSource: require("@/img/boy/hair-5-4.png")
              }
            ],
            selectedHair: require("@/img/boy/hair-3-4.png"),
            iconSource: require("@/img/icons/ico-hair-color-4.svg")
          },
          {
            name: "Black",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/boy/hair-1-5.png")
              },
              {
                id: 2,
                imageSource: require("@/img/boy/hair-2-5.png")
              },
              {
                id: 3,
                imageSource: require("@/img/boy/hair-3-5.png")
              },
              {
                id: 4,
                imageSource: require("@/img/boy/hair-4-5.png")
              },
              {
                id: 5,
                imageSource: require("@/img/boy/hair-5-5.png")
              }
            ],
            selectedHair: require("@/img/boy/hair-3-5.png"),
            iconSource: require("@/img/icons/ico-hair-color-5.svg")
          }
        ],
        // Hair Color Girl
        hairColorGirl: [
          {
            name: "Blonde",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/girl/hair-1-1.png")
              },
              {
                id: 2,
                imageSource: require("@/img/girl/hair-2-1.png")
              },
              {
                id: 3,
                imageSource: require("@/img/girl/hair-3-1.png")
              },
              {
                id: 4,
                imageSource: require("@/img/girl/hair-4-1.png")
              },
              {
                id: 5,
                imageSource: require("@/img/girl/hair-5-1.png")
              }
            ],
            selectedHair: require("@/img/girl/hair-4-1.png"),
            iconSource: require("@/img/icons/ico-hair-color-1.svg")
          },
          {
            name: "Light Red",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/girl/hair-1-2.png")
              },
              {
                id: 2,
                imageSource: require("@/img/girl/hair-2-2.png")
              },
              {
                id: 3,
                imageSource: require("@/img/girl/hair-3-2.png")
              },
              {
                id: 4,
                imageSource: require("@/img/girl/hair-4-2.png")
              },
              {
                id: 5,
                imageSource: require("@/img/girl/hair-5-2.png")
              }
            ],
            selectedHair: require("@/img/girl/hair-4-2.png"),
            iconSource: require("@/img/icons/ico-hair-color-2.svg")
          },
          {
            name: "Dark Red",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/girl/hair-1-3.png")
              },
              {
                id: 2,
                imageSource: require("@/img/girl/hair-2-3.png")
              },
              {
                id: 3,
                imageSource: require("@/img/girl/hair-3-3.png")
              },
              {
                id: 4,
                imageSource: require("@/img/girl/hair-4-3.png")
              },
              {
                id: 5,
                imageSource: require("@/img/girl/hair-5-3.png")
              }
            ],
            selectedHair: require("@/img/girl/hair-4-3.png"),
            iconSource: require("@/img/icons/ico-hair-color-3.svg")
          },
          {
            name: "Brown",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/girl/hair-1-4.png")
              },
              {
                id: 2,
                imageSource: require("@/img/girl/hair-2-4.png")
              },
              {
                id: 3,
                imageSource: require("@/img/girl/hair-3-4.png")
              },
              {
                id: 4,
                imageSource: require("@/img/girl/hair-4-4.png")
              },
              {
                id: 5,
                imageSource: require("@/img/girl/hair-5-4.png")
              }
            ],
            selectedHair: require("@/img/girl/hair-4-4.png"),
            iconSource: require("@/img/icons/ico-hair-color-4.svg")
          },
          {
            name: "Black",
            imageSource: "",
            image: [
              {
                id: 1,
                imageSource: require("@/img/girl/hair-1-5.png")
              },
              {
                id: 2,
                imageSource: require("@/img/girl/hair-2-5.png")
              },
              {
                id: 3,
                imageSource: require("@/img/girl/hair-3-5.png")
              },
              {
                id: 4,
                imageSource: require("@/img/girl/hair-4-5.png")
              },
              {
                id: 5,
                imageSource: require("@/img/girl/hair-5-5.png")
              }
            ],
            selectedHair: require("@/img/girl/hair-4-5.png"),
            iconSource: require("@/img/icons/ico-hair-color-5.svg")
          }
        ],
        eyeShape: "",
        // Eye Shape Boy
        eyeShapeBoy: [
          {
            name: "Round Full",
            iconSource: require("@/img/icons/ico-eye-shape-1.svg"),
            id: 11
          },
          {
            name: "Monolid",
            iconSource: require("@/img/icons/ico-eye-shape-2.svg"),
            id: 21
          },
          {
            name: "Downturned",
            iconSource: require("@/img/icons/ico-eye-shape-3.svg"),
            id: 31
          },
          {
            name: "Round",
            iconSource: require("@/img/icons/ico-eye-shape-4.svg"),
            id: 41
          },
          {
            name: "Hooded",
            iconSource: require("@/img/icons/ico-eye-shape-5.svg"),
            id: 51
          }
        ],
        // Eye Shape Girl
        eyeShapeGirl: [
          {
            name: "Round Full",
            iconSource: require("@/img/icons/ico-eye-shape-1.svg"),
            id: 11
          },
          {
            name: "Monolid",
            iconSource: require("@/img/icons/ico-eye-shape-2.svg"),
            id: 21
          },
          {
            name: "Downturned",
            iconSource: require("@/img/icons/ico-eye-shape-3.svg"),
            id: 31
          },
          {
            name: "Round",
            iconSource: require("@/img/icons/ico-eye-shape-4.svg"),
            id: 41
          },
          {
            name: "Hooded",
            iconSource: require("@/img/icons/ico-eye-shape-5.svg"),
            id: 51
          }
        ],
        eyeColor: "",
        // Eye Color Boy
        eyeColorBoy: [
          {
            name: "Blue",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-1.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-1.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-1.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-1.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-1.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-1.png"),
            iconSource: require("@/img/icons/ico-eye-color-1.svg")
          },
          {
            name: "Green",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-2.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-2.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-2.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-2.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-2.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-2.png"),
            iconSource: require("@/img/icons/ico-eye-color-2.svg")
          },
          {
            name: "Amber",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-3.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-3.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-3.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-3.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-3.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-3.png"),
            iconSource: require("@/img/icons/ico-eye-color-3.svg")
          },
          {
            name: "Brown",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-4.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-4.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-4.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-4.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-4.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-4.png"),
            iconSource: require("@/img/icons/ico-eye-color-4.svg")
          },
          {
            name: "Gray",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-5.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-5.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-5.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-5.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-5.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-5.png"),
            iconSource: require("@/img/icons/ico-eye-color-5.svg")
          }
        ],
        // Eye Color Girl
        eyeColorGirl: [
          {
            name: "Blue",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-1.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-1.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-1.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-1.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-1.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-1.png"),
            iconSource: require("@/img/icons/ico-eye-color-1.svg")
          },
          {
            name: "Green",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-2.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-2.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-2.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-2.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-2.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-2.png"),
            iconSource: require("@/img/icons/ico-eye-color-2.svg")
          },
          {
            name: "Amber",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-3.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-3.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-3.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-3.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-3.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-3.png"),
            iconSource: require("@/img/icons/ico-eye-color-3.svg")
          },
          {
            name: "Brown",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-4.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-4.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-4.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-4.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-4.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-4.png"),
            iconSource: require("@/img/icons/ico-eye-color-4.svg")
          },
          {
            name: "Gray",
            imageSource: "",
            image: [
              {
                id: 11,
                imageSource: require("@/img/child/eyes/eyes-1-5.png")
              },
              {
                id: 21,
                imageSource: require("@/img/child/eyes/eyes-2-5.png")
              },
              {
                id: 31,
                imageSource: require("@/img/child/eyes/eyes-3-5.png")
              },
              {
                id: 41,
                imageSource: require("@/img/child/eyes/eyes-4-5.png")
              },
              {
                id: 51,
                imageSource: require("@/img/child/eyes/eyes-5-5.png")
              }
            ],
            selectedEyes: require("@/img/child/eyes/eyes-5-5.png"),
            iconSource: require("@/img/icons/ico-eye-color-5.svg")
          }
        ]
      }
    };
  },
  created() {
    this.emitToParent();
  },
  methods: {
    emitToParent() {
      this.$emit("genderPassed", this.form.gender);
      this.$emit("namePassed", this.form.firstName);
      this.$emit("skinPassed", this.form.skin.name);
      this.$emit("glassesPassed", this.form.glasses.name);
      this.$emit("hairTypePassed", this.form.hairType.name);
      this.$emit("hairColorPassed", this.form.hairColor.name);
      this.$emit("eyeShapePassed", this.form.eyeShape.name);
      this.$emit("eyeColorPassed", this.form.eyeColor.name);
    },
    prevStep: function() {
      this.errors = null;
      this.step--;
    },
    nextStep: function() {
      if (this.step == 1) {
        if (!this.form.gender) {
          this.errors = "Please select gender";
          return false;
        } else {
          this.errors = null;
        }
        if (this.form.gender != this.form.skin.gender) {
          this.form.skin = "";
          this.form.glasses = "";
          this.form.hairType = "";
          this.form.hairColor = "";
          this.form.eyeShape = "";
          this.form.eyeColor = "";
        }
        if (!this.form.firstName || this.form.firstName.length < 2) {
          this.errors = "Please type in child's name, at least 2 characters";
          return false;
        } else {
          this.errors = null;
        }
      }
      if (this.step == 2) {
        if (!this.form.skin) {
          this.errors = "Please select the skin tone";
          return false;
        } else {
          this.errors = null;
        }
        if (!this.form.glasses) {
          this.errors = "Glasses? Please select one of the above options";
          return false;
        }
      }
      if (this.step == 3) {
        if (!this.form.hairColor) {
          this.errors = "Please select the hair color";
          return false;
        } else {
          this.errors = null;
        }
        if (!this.form.hairType) {
          this.errors = "Please select the hair type";
          return false;
        } else {
          this.errors = null;
        }
      }
      this.step++;
    },
    send: function() {
      if (this.step == 4) {
        if (!this.form.eyeColor) {
          this.errors = "Please select your eye color";
          return false;
        }
        if (!this.form.eyeShape) {
          this.errors = "Please select your eye shape";
          return false;
        }
      }
      this.showSpinner = true;
      this.$emit("showSpinner", this.showSpinner);
      this.isHidden = true;
      this.$emit("childHidden", this.isHidden);
    }
  },
  watch: {
    form: {
      handler(newValue) {
        this.emitToParent(newValue);
      },
      deep: true
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import ".././scss/app.scss";
</style>

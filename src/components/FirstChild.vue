<template>
  <div class="wrapper">
    <form id="form">
      <!-- Display images -->
      <div id="view">
        <!-- Display images - Preview Skin-->
        <!-- <div v-for="image in form.skinToneMale" :key="image.name" class="preview-image-skin-male">
          <img
            :src="image.image"
            :alt="image.name"
            class="img-view img-skin-tone"
            v-if="form.skinToneMale.preview == 1"
          />
        </div>-->
        <!-- Display skin -->
        <img :src="form.skin.image" :alt="form.skin.name" class="img-view img-skin-tone" />
        <!-- Display hair -->
        <div v-for="image in form.hairColor.image" :key="image.number">
          <img
            :src="image.imageSource"
            class="img-view img-hair-color"
            v-if="form.hairType.number == image.number"
          />
        </div>
        <!-- Display eyes -->
        <div v-for="image in form.eyeColor.image" :key="image.eyeNumber">
          <img
            :src="image.imageSource"
            class="img-view img-eye-color"
            v-if="form.eyeShape.eyeNumber == image.eyeNumber"
          />
        </div>
        <!-- Display glasses -->
        <img :src="form.glasses.image" :alt="form.glasses.name" class="img-view img-glasses" />
      </div>

      <div class="form-container">
        <!-- Step 1 -->
        <section class="step gender name" v-if="step == 1">
          <div class="step-number-wrap text-success">
            <p class="step-number">
              {{step}}
              <sup>st</sup>
            </p>
            <p class="step-text">Step</p>
          </div>
          <!-- using direct svg file -->
          <div class="gender flex justify-center mb-4">
            <h4 class="py-2 flex text-center">Select Gender</h4>
            <p-input
              type="radio"
              class="p-icon p-jelly p-round p-bigger ml-5 mr-1"
              id="male"
              value="Male"
              v-model="form.gender"
              name="male"
            >
              <label class="d-flex align-items-center">
                Male
                <img src="/img/man.svg" class="svg ml-2" />
              </label>
            </p-input>

            <p-input
              class="p-icon p-jelly p-round p-bigger ml-5"
              type="radio"
              id="female"
              value="Female"
              v-model="form.gender"
              name="female"
            >
              <label class="d-flex flex-row-reverse align-items-center">
                Female
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
        <section class="step" v-if="step == 2">
          <!-- using direct svg file -->
          <div class="step-number-wrap text-success">
            <p class="step-number">
              {{step}}
              <sup>nd</sup>
            </p>
            <p class="step-text">Step</p>
          </div>
          <div class="skin-tone all-boxes-wrap flex-col py-1">
            <h4 class="py-2 flex text-center">Select your Skin Tone</h4>
            <div class="skin-tone-boxes">
              <ul class="all-boxes" v-if="form.gender === 'Male'">
                <li v-for="(skinInfo, index) in form.skinToneMale" :key="index.id">
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
                <li v-for="(skinInfo, index) in form.skinToneFemale" :key="index.id">
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
            <h4 class="py-2 flex text-center">Glasses?</h4>
            <div class="glasses-boxes">
              <ul class="all-boxes">
                <li v-for="(glasses, index) in form.glassesType" :key="index.id">
                  <p-input
                    class="p-icon p-jelly p-round p-bigger"
                    type="radio"
                    :id="glasses.name"
                    :name="glasses.name"
                    v-model="form.glasses"
                    :value="glasses"
                  >
                    <img :src="glasses.iconSource" class="svg-2" />
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
              {{step}}
              <sup>rd</sup>
            </p>

            <p class="step-text">Step</p>
          </div>
          <div class="hair-type all-boxes-wrap flex-col py-1">
            <h4 class="py-2 flex text-center">Select your Hair Type</h4>
            <div class="hair-type-boxes">
              <ul class="all-boxes" v-if="form.gender === 'Male'">
                <li v-for="(hairType, index) in form.hairTypeMale" :key="index.hair">
                  <p-input
                    class="p-icon p-jelly p-round p-bigger"
                    type="radio"
                    :id="hairType.name"
                    :name="hairType.name"
                    v-model="form.hairType"
                    :value="hairType"
                  >
                    <img :src="hairType.iconSource" class="svg-2" />
                  </p-input>
                </li>
              </ul>

              <ul class="all-boxes" v-else>
                <li v-for="(hairType, index) in form.hairTypeFemale" :key="index">
                  <p-input
                    class="p-icon p-jelly p-round p-bigger"
                    type="radio"
                    :id="hairType.name"
                    :name="hairType.name"
                    v-model="form.hairType"
                    :value="hairType"
                  >
                    <img :src="hairType.iconSource" class="svg-2" />
                  </p-input>
                </li>
              </ul>
            </div>
          </div>
          <div class="hair-color all-boxes-wrap flex-col py-1">
            <h4 class="py-2 flex text-center">Select your Hair Color</h4>
            <div class="hair-color-boxes">
              <ul class="all-boxes" v-if="form.gender === 'Male'">
                <li v-for="(hairColor, index) in form.hairColorMale" :key="index.id">
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
                <li v-for="(hairColor, index) in form.hairColorFemale" :key="index.id">
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
        </section>

        <!-- Step 4 -->
        <section class="step eye" v-if="step == 4">
          <div class="step-number-wrap text-success">
            <p class="step-number">
              {{step}}
              <sup>th</sup>
            </p>

            <p class="step-text">Step</p>
          </div>
          <div class="eye-shape all-boxes-wrap flex-col py-1">
            <h4 class="py-2 flex text-center">Select your Eye Shape</h4>
            <div class="eye-shape-boxes">
              <ul class="all-boxes" v-if="form.gender === 'Male'">
                <li v-for="(eyeShape, index) in form.eyeShapeMale" :key="index.id">
                  <p-input
                    class="p-icon p-jelly p-round p-bigger"
                    type="radio"
                    :id="eyeShape.name"
                    :name="eyeShape.name"
                    v-model="form.eyeShape"
                    :value="eyeShape"
                  >
                    <img :src="eyeShape.iconSource" class="svg-2" />
                  </p-input>
                </li>
              </ul>

              <ul class="all-boxes" v-else>
                <li v-for="(eyeShape, index) in form.eyeShapeFemale" :key="index.id">
                  <p-input
                    class="p-icon p-jelly p-round p-bigger"
                    type="radio"
                    :id="eyeShape.name"
                    :name="eyeShape.name"
                    v-model="form.eyeShape"
                    :value="eyeShape"
                  >
                    <img :src="eyeShape.iconSource" class="svg-2" />
                  </p-input>
                </li>
              </ul>
            </div>
          </div>
          <div class="eye-color all-boxes-wrap flex-col py-1">
            <h4 class="py-2 flex text-center">Select your Eye Color</h4>
            <div class="eye-color-boxes">
              <ul class="all-boxes" v-if="form.gender === 'Male'">
                <li v-for="(eyeColor, index) in form.eyeColorMale" :key="index.id">
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
                <li v-for="(eyeColor, index) in form.eyeColorFemale" :key="index.id">
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
        </section>

        <!-- Display error Message -->
        <div class="error text-center my-3">
          <span v-for="e in errors" class="font-italic font-weight-normal" :key="e.errors">{{ e }}</span>
        </div>
        <!-- Steps Buttons -->
        <section class="buttons">
          <button v-if="step != 1" @click.prevent="prevStep" class="prev btn btn-primary">Previous</button>
          <!-- <button v-if="step != 1 && step != 2" @click.prevent="prevStep" class="prev btn btn-primary">Previous</button> -->
          <button
            v-if="step != totalsteps"
            @click.prevent="nextStep"
            class="next btn btn-success"
          >Continue</button>
          <button v-if="step == 4" @click.prevent="send" class="send btn btn-warning">Preview Book</button>
        </section>
        <hr class="my-2 text-success" />
        <!-- Display Selected items -->
        <div id="selected">
          <transition name="fade">
            <h4
              class="first-child font-bold text-success"
              v-if="form.gender || form.firstName"
            >Selected Child Details:</h4>
          </transition>
          <transition name="fade">
            <p class="gender-selected font-weight-bold mb-0" v-if="form.gender">
              Gender:
              <span class="font-weight-normal">{{ form.gender }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="name-selected font-weight-bold mb-0" v-if="form.firstName">
              Name:
              <span class="font-weight-normal">{{ form.firstName }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="skin-selected font-weight-bold mb-0" v-if="form.skin">
              Skin tone:
              <span class="font-weight-normal">{{ form.skin.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyecolor-selected font-weight-bold mb-0" v-if="form.glasses">
              Glasses:
              <span class="font-weight-normal">{{ form.glasses.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="hairtype-selected font-weight-bold mb-0" v-if="form.hairType">
              Hair type:
              <span class="font-weight-normal">{{ form.hairType.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="haircolor-selected font-weight-bold mb-0" v-if="form.hairColor">
              Hair color:
              <span class="font-weight-normal">{{ form.hairColor.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyeshape-selected font-weight-bold mb-0" v-if="form.eyeShape">
              Eye shape:
              <span class="font-weight-normal">{{ form.eyeShape.name }}</span>
            </p>
          </transition>
          <transition name="fade">
            <p class="eyecolor-selected font-weight-bold mb-0" v-if="form.eyeColor">
              Eye color:
              <span class="font-weight-normal">{{ form.eyeColor.name }}</span>
            </p>
          </transition>
        </div>
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
      step: 1,
      totalsteps: 4,
      errors: [],
      // selectedItem: {},
      // selected: undefined,
      form: {
        nameStefan: "stefan",
        gender: "",
        firstName: null,
        skin: "",
        //Skin Tone Male
        skinToneMale: [
          {
            name: "Black-male",
            image: "./img/man-1.png",
            iconSource: "/img/black-icon.svg",
            preview: 1,
            gender: "Male"
          },
          {
            name: "Red-male",
            image: "/img/man-2.png",
            iconSource: "/img/red-icon.svg",
            gender: "Male"
          },
          {
            name: "Green-male",
            image: "/img/man-3.png",
            iconSource: "/img/green-icon.svg",
            gender: "Male"
          },
          {
            name: "Yellow-male",
            image: "/img/man-4.png",
            iconSource: "/img/yellow-icon.svg",
            gender: "Male"
          },
          {
            name: "Blue-male",
            image: "/img/man-5.png",
            iconSource: "/img/blue-icon.svg",
            gender: "Male"
          }
        ],
        // Skin Tone Female
        skinToneFemale: [
          {
            name: "Black-female",
            image: "./img/female-1.png",
            iconSource: "/img/black-icon.svg",
            gender: "Female"
          },
          {
            name: "Red-female",
            image: "/img/female-2.png",
            iconSource: "/img/red-icon.svg",
            gender: "Female"
          },
          {
            name: "Green-female",
            image: "/img/female-3.png",
            iconSource: "/img/green-icon.svg",
            gender: "Female"
          },
          {
            name: "Yellow-female",
            image: "/img/female-4.png",
            iconSource: "/img/yellow-icon.svg",
            gender: "Female"
          },
          {
            name: "Blue-female",
            image: "/img/female-5.png",
            iconSource: "/img/blue-icon.svg",
            gender: "Female"
          }
        ],
        //Glasses
        glasses: "",
        glassesType: [
          {
            name: "1-glasses",
            image: "./img/glasses-1.png",
            iconSource: "/img/black-icon.svg"
          },
          {
            name: "2-glasses",
            image: "./img/glasses-2.png",
            iconSource: "/img/red-icon.svg"
          },
          {
            name: "3-glasses",
            image: "./img/glasses-3.png",
            iconSource: "/img/green-icon.svg"
          },
          {
            name: "4-glasses",
            image: "./img/glasses-4.png",
            iconSource: "/img/yellow-icon.svg"
          },
          {
            name: "5-glasses",
            image: "./img/glasses-5.png",
            iconSource: "/img/blue-icon.svg"
          }
        ],
        hairType: "",
        // Hair Type Male
        hairTypeMale: [
          {
            name: "1-male",
            iconSource: "/img/black-icon.svg",
            number: 1
          },
          {
            name: "2-male",
            iconSource: "/img/red-icon.svg",
            number: 2
          },
          {
            name: "3-male",
            iconSource: "/img/green-icon.svg",
            number: 3
          },
          {
            name: "4-male",
            iconSource: "/img/yellow-icon.svg",
            number: 4
          },
          {
            name: "5-male",
            iconSource: "/img/blue-icon.svg",
            number: 5
          }
        ],
        // Hair Type Female
        hairTypeFemale: [
          {
            name: "1-fem",
            iconSource: "/img/black-icon.svg",
            number: 1
          },
          {
            name: "2-fem",
            iconSource: "/img/red-icon.svg",
            number: 2
          },
          {
            name: "3-fem",
            iconSource: "/img/green-icon.svg",
            number: 3
          },
          {
            name: "4-fem",
            iconSource: "/img/yellow-icon.svg",
            number: 4
          },
          {
            name: "5-fem",
            iconSource: "/img/blue-icon.svg",
            number: 5
          }
        ],
        hairColor: "",
        // Hair Color Male
        hairColorMale: [
          {
            name: "Male Color 1",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/1male-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/1male-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/1male-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/1male-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/1male-id-5.png"
              }
            ],

            iconSource: "/img/black-icon.svg"
          },
          {
            name: "Male Color 2",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/2male-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/2male-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/2male-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/2male-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/2male-id-5.png"
              }
            ],
            iconSource: "/img/red-icon.svg"
          },
          {
            name: "Male Color 3",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/3male-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/3male-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/3male-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/3male-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/3male-id-5.png"
              }
            ],
            iconSource: "/img/green-icon.svg"
          },
          {
            name: "Male Color 4",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/4male-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/4male-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/4male-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/4male-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/4male-id-5.png"
              }
            ],
            iconSource: "/img/yellow-icon.svg"
          },
          {
            name: "Male Color 5",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/5male-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/5male-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/5male-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/5male-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/5male-id-5.png"
              }
            ],
            iconSource: "/img/blue-icon.svg"
          }
        ],
        // Hair Color Female
        hairColorFemale: [
          {
            name: "1 Female Color",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/1female-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/1female-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/1female-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/1female-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/1female-id-5.png"
              }
            ],
            iconSource: "/img/black-icon.svg"
          },
          {
            name: "2 Female Color",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/2female-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/2female-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/2female-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/2female-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/2female-id-5.png"
              }
            ],
            iconSource: "/img/red-icon.svg"
          },
          {
            name: "3 Female Color",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/3female-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/3female-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/3female-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/3female-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/3female-id-5.png"
              }
            ],
            iconSource: "/img/green-icon.svg"
          },
          {
            name: "4 Female Color",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/4female-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/4female-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img4female-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/4female-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/4female-id-5.png"
              }
            ],
            iconSource: "/img/yellow-icon.svg"
          },
          {
            name: "5 Female Color",
            imageSource: "",
            image: [
              {
                number: 1,
                imageSource: "/img/5female-id-1.png"
              },
              {
                number: 2,
                imageSource: "/img/5female-id-2.png"
              },
              {
                number: 3,
                imageSource: "/img/5female-id-3.png"
              },
              {
                number: 4,
                imageSource: "/img/5female-id-4.png"
              },
              {
                number: 5,
                imageSource: "/img/5female-id-5.png"
              }
            ],
            iconSource: "/img/blue-icon.svg"
          }
        ],
        eyeShape: "",
        // Eye Shape Male
        eyeShapeMale: [
          {
            name: "1-male",
            iconSource: "/img/black-icon.svg",
            eyeNumber: 11
          },
          {
            name: "2-male",
            iconSource: "/img/red-icon.svg",
            eyeNumber: 21
          },
          {
            name: "3-male",
            iconSource: "/img/green-icon.svg",
            eyeNumber: 31
          },
          {
            name: "4-male",
            iconSource: "/img/yellow-icon.svg",
            eyeNumber: 41
          },
          {
            name: "5-male",
            iconSource: "/img/blue-icon.svg",
            eyeNumber: 51
          }
        ],
        // Eye Shape Female
        eyeShapeFemale: [
          {
            name: "1-fem",
            iconSource: "/img/black-icon.svg",
            eyeNumber: 11
          },
          {
            name: "2-fem",
            iconSource: "/img/red-icon.svg",
            eyeNumber: 21
          },
          {
            name: "3-fem",
            iconSource: "/img/green-icon.svg",
            eyeNumber: 31
          },
          {
            name: "4-fem",
            iconSource: "/img/yellow-icon.svg",
            eyeNumber: 41
          },
          {
            name: "5-fem",
            iconSource: "/img/blue-icon.svg",
            eyeNumber: 51
          }
        ],
        eyeColor: "",
        // Eye Color Male
        eyeColorMale: [
          {
            name: "Male Color 1",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/1male-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/1male-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/1male-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/1male-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/1male-id-5.png"
              }
            ],

            iconSource: "/img/black-icon.svg"
          },
          {
            name: "Male Color 2",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/2male-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/2male-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/2male-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/2male-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/2male-id-5.png"
              }
            ],
            iconSource: "/img/red-icon.svg"
          },
          {
            name: "Male Color 3",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/3male-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/3male-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/3male-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/3male-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/3male-id-5.png"
              }
            ],
            iconSource: "/img/green-icon.svg"
          },
          {
            name: "Male Color 4",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/4male-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/4male-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/4male-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/4male-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/4male-id-5.png"
              }
            ],
            iconSource: "/img/yellow-icon.svg"
          },
          {
            name: "Male Color 5",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/5male-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/5male-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/5male-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/5male-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/5male-id-5.png"
              }
            ],
            iconSource: "/img/blue-icon.svg"
          }
        ],
        // Eye Color Female
        eyeColorFemale: [
          {
            name: "1 Female Color",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/1female-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/1female-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/1female-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/1female-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/1female-id-5.png"
              }
            ],
            iconSource: "/img/black-icon.svg"
          },
          {
            name: "2 Female Color",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/2female-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/2female-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/2female-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/2female-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/2female-id-5.png"
              }
            ],
            iconSource: "/img/red-icon.svg"
          },
          {
            name: "3 Female Color",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/3female-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/3female-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/3female-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/3female-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/3female-id-5.png"
              }
            ],
            iconSource: "/img/green-icon.svg"
          },
          {
            name: "4 Female Color",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/4female-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/4female-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img4female-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/4female-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/4female-id-5.png"
              }
            ],
            iconSource: "/img/yellow-icon.svg"
          },
          {
            name: "5 Female Color",
            imageSource: "",
            image: [
              {
                eyeNumber: 11,
                imageSource: "/img/5female-id-1.png"
              },
              {
                eyeNumber: 21,
                imageSource: "/img/5female-id-2.png"
              },
              {
                eyeNumber: 31,
                imageSource: "/img/5female-id-3.png"
              },
              {
                eyeNumber: 41,
                imageSource: "/img/5female-id-4.png"
              },
              {
                eyeNumber: 51,
                imageSource: "/img/5female-id-5.png"
              }
            ],
            iconSource: "/img/blue-icon.svg"
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
          this.errors = "Do you wear glasses? Please select an option";
          return false;
        }
      }
      if (this.step == 3) {
        if (!this.form.hairType) {
          this.errors = "Please select the hair type";
          return false;
        } else {
          this.errors = null;
        }
        if (!this.form.hairColor) {
          this.errors = "Please select the hair color";
          return false;
        } else {
          this.errors = null;
        }
      }
      this.step++;
    },
    send: function() {
      if (this.step == 4) {
        if (!this.form.eyeShape) {
          this.errors = "Please select your eye shape";
          return false;
        }
        if (!this.form.eyeColor) {
          this.errors = "Please select your eye color";
          return false;
        }
      }
      alert("was sent");
      console.log("was sent");
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

<style lang="scss">
.wrapper {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 50px;
  #form {
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    #view {
      height: 400px;
      width: 400px;
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
      #selected {
        .name-selected {
          text-transform: capitalize;
        }
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
// .b-counter {
//   display: none !important;
// }
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
// Fixes for Pretty
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
</style>

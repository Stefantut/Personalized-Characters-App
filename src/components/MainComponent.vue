<template>
  <div class="wrapper">
    <form id="form">
      <!-- Display images -->
      <div id="view">
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
        <div class="error text-center my-3">
          <span v-for="e in errors" class="font-italic font-weight-normal" :key="e.errors">{{ e }}</span>
        </div>
        <!-- Step 1 -->
        <section class="details" v-if="step == 1">
          <!-- using direct svg file -->
          <div class="gender flex justify-center mb-4">
            <p-input
              class="p-icon p-jelly p-round p-bigger"
              type="radio"
              id="male"
              value="Male"
              v-model="form.gender"
              name="male"
            >
              <img src="/img/man.svg" class="svg" />
            </p-input>
            <p-input
              class="p-icon p-jelly p-round p-bigger"
              type="radio"
              id="female"
              value="Female"
              v-model="form.gender"
              name="female"
            >
              <img src="/img/woman.svg" class="svg" />
            </p-input>
          </div>
          <input
            v-model="form.firstName"
            type="text"
            placeholder="What is your first name?"
            class="first-name form-control form-control-md"
          />

          <div class="skin-tone flex-col py-1">
            <h4 class="py-2 flex justify-center">Select your Skin Tone</h4>
            <div class="skin-tone-boxes">
              <ul class="flex justify-between px-5 all-boxes" v-if="form.gender === 'Male'">
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

              <ul class="flex justify-between px-5 all-boxes" v-else>
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
        </section>
        <!-- Step 2 -->
        <section class="hair" v-if="step == 2">
          <div class="hair-type flex-col py-1">
            <h4 class="py-2 flex justify-center">Select your Hair Type</h4>
            <div class="hair-type-boxes flex justify-between px-5">
              <ul class="flex justify-between px-2 all-boxes" v-if="form.gender === 'Male'">
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

              <ul class="flex justify-between px-5 all-boxes" v-else>
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
          <div class="hair-color flex-col py-1">
            <h4 class="py-2 flex justify-center">Select your Hair Color</h4>
            <div class="hair-color-boxes flex justify-between px-5">
              <ul class="flex justify-between px-5 all-boxes" v-if="form.gender === 'Male'">
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

              <ul class="flex justify-between px-5 all-boxes" v-else>
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
        <!-- Step 3 -->
        <section class="eye" v-if="step == 3">
          <div class="eye-shape flex-col py-1">
            <h4 class="py-2 flex justify-center">Select your Eye Shape</h4>
            <div class="eye-shape-boxes flex justify-between px-5">
              <ul class="flex justify-between px-5 all-boxes" v-if="form.gender === 'Male'">
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

              <ul class="flex justify-between px-5 all-boxes" v-else>
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
          <div class="eye-color flex-col py-1">
            <h4 class="py-2 flex justify-center">Select your Eye Color</h4>
            <div class="eye-color-boxes flex justify-between px-5">
              <ul class="flex justify-between px-5 all-boxes" v-if="form.gender === 'Male'">
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

              <ul class="flex justify-between px-5 all-boxes" v-else>
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

          <!-- Glasses -->
          <div class="glasses flex-col py-1">
            <h4 class="py-2 flex justify-center">Glasses?</h4>
            <div class="glasses-boxes flex justify-between px-5">
              <ul class="flex justify-between px-5 all-boxes">
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

        <section class="buttons flex justify-between p-1 w-100">
          <button v-if="step != 1" @click.prevent="prevStep" class="prev btn btn-primary">Previous</button>
          <button
            v-if="step != totalsteps"
            @click.prevent="nextStep"
            class="next btn btn-success"
          >Continue</button>
        </section>
        <button v-if="step == 3" @click.prevent="send" class="send btn btn-warning">Send</button>
        <hr class="my-3" />
        <!-- Display Selected items -->
        <div id="selected">
          <h4 class="first-parent font-bold text-success">Selected Parent Details:</h4>
          <p class="gender-selected">Gender: {{ form.gender }}</p>
          <p class="name-selected">Name: {{ form.firstName }}</p>
          <p class="skin-selected">Skin tone: {{ form.skin.name }}</p>
          <p class="hairtype-selected">Hair type: {{ form.hairType.name }}</p>
          <p class="haircolor-selected">Hair color: {{ form.hairColor.name }}</p>
          <p class="eyeshape-selected">Eye shape: {{ form.eyeShape.name }}</p>
          <p class="eyecolor-selected">Eye color: {{ form.eyeColor.name }}</p>
          <p class="eyecolor-selected">Glasses: {{ form.glasses.name }}</p>
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
  name: "Parent",
  data: function() {
    return {
      step: 1,
      totalsteps: 3,
      errors: [],
      selectedItem: {},
      selected: undefined,
      form: {
        gender: null,
        firstName: null,
        skin: "",
        //Skin Tone Male
        skinToneMale: [
          {
            name: "Black",
            image: "./img/skin-girl-1.png",
            iconSource: "/img/black-icon.svg"
          },
          {
            name: "Red",
            image: "/img/skin-girl-2.png",
            iconSource: "/img/red-icon.svg"
          },
          {
            name: "Green",
            image: "/img/skin-girl-3.png",
            iconSource: "/img/green-icon.svg"
          },
          {
            name: "Yellow",
            image: "/img/skin-girl-4.png",
            iconSource: "/img/yellow-icon.svg"
          },
          {
            name: "Blue",
            image: "/img/skin-girl-5.png",
            iconSource: "/img/blue-icon.svg"
          }
        ],
        // Skin Tone Female
        skinToneFemale: [
          {
            name: "Black",
            image: "./img/skin-girl-5.png",
            iconSource: "/img/black-icon.svg"
          },
          {
            name: "Red",
            image: "/img/skin-girl-5.png",
            iconSource: "/img/red-icon.svg"
          },
          {
            name: "Green",
            image: "/img/skin-girl-5.png",
            iconSource: "/img/green-icon.svg"
          },
          {
            name: "Yellow",
            image: "/img/skin-girl-5.png",
            iconSource: "/img/yellow-icon.svg"
          },
          {
            name: "Blue",
            image: "/img/skin-girl-5.png",
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
        ],
        glasses: "",
        glassesType: [
          {
            name: "1-glasses",
            iconSource: "/img/black-icon.svg",
            image: "./img/skin-girl-1.png"
          },
          {
            name: "2-glasses",
            iconSource: "/img/red-icon.svg",
            image: "./img/skin-girl-1.png"
          },
          {
            name: "3-glasses",
            iconSource: "/img/green-icon.svg",
            image: "./img/skin-girl-1.png"
          },
          {
            name: "4-glasses",
            iconSource: "/img/yellow-icon.svg",
            image: "./img/skin-girl-1.png"
          },
          {
            name: "5-glasses",
            iconSource: "/img/blue-icon.svg",
            image: "./img/skin-girl-1.png"
          }
        ]
      }
    };
  },
  methods: {
    prevStep: function() {
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
        if (!this.form.firstName || this.form.firstName.length < 2) {
          this.errors = "Please type in parent name, min 2 characters";
          return false;
        } else {
          this.errors = null;
        }
        if (!this.form.skin) {
          this.errors = "Please select the skin tone";
          return false;
        } else {
          this.errors = null;
        }
      }
      if (this.step == 2) {
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
      if (this.step == 3) {
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
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
}
#form {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
}
.error {
  color: red;
}
.svg {
  height: 30px;
}
.svg-2 {
  height: 20px;
}
.text {
  font-size: 12px;
}

.pretty.p-round .state label:before,
label:after {
  opacity: 0;
  pointer-events: none;
}

.pretty {
  margin-right: 0 !important;
}

#view {
  height: 400px;
  width: 400px;
  background-color: #ffefe2;
  margin-right: 50px;
  margin-top: 25px;
  border-radius: 10px;
  border: 1px solid #8ba68f;
  display: flex;
  justify-content: center;
  position: relative;
}

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
.form-container {
  width: 400px;
}
.name-selected {
  text-transform: capitalize;
}
.block {
  display: block !important;
}

.b-wrap {
  padding: 0 !important;
}
// .b-counter {
//   display: none !important;
// }

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
.all-boxes {
  display: flex;
  flex-direction: row;
  li {
    list-style-type: none;
  }
}

.active {
  background: #f00;
  color: #fff;
  font-size: 30px;
}

.pulse {
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: pulse 1s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
</style>

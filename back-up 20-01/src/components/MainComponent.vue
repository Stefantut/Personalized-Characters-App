<template>
  <div>
    <form id="form">
      <div id="view">
        <img :src="form.skin.image" :alt="form.skin.image" class="img-view img-skin-tone" />
        <!-- <img :src="form.hairType.image" :alt="form.hairType.image" class="img-view img-hair-type" /> -->
        <div v-for="image in form.hairColor.image" :key="image.number">
          <img
            :src="image.imageSource"
            class="img-view img-hair-color"
            v-if="form.hairType.number==image.number"
          />
        </div>
      </div>

      <div class="form-container">
        <div class="error text-center my-3">
          <span v-for="e in errors" class="text-warning font-italic" :key="e.errors">{{ e }}</span>
        </div>

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
            <h1 class="py-2 flex justify-center">Select your Skin Tone</h1>
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

        <section class="hair" v-if="step == 2">
          <div class="hair-type flex-col py-1">
            <h1 class="py-2 flex justify-center">Select your Hair Type</h1>
            <div class="hair-type-boxes flex justify-between px-5">
              <!-- <input type="radio" id="1" value="1" v-model="form.hairType" />
              <label for="1">1</label>
              <input type="radio" id="2" value="2" v-model="form.hairType" />
              <label for="2">2</label>
              <input type="radio" id="3" value="3" v-model="form.hairType" />
              <label for="3">3</label>
              <input type="radio" id="4" value="4" v-model="form.hairType" />
              <label for="4">4</label>
              <input type="radio" id="5" value="5" v-model="form.hairType" />
              <label for="5">5</label>-->
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
            <h1 class="py-2 flex justify-center">Select your Hair Color</h1>
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
        <section class="eye" v-if="step == 3">
          <div class="eye-shape flex-col py-1">
            <h1 class="py-2 flex justify-center">Select your Eye Shape</h1>
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
            <h1 class="py-2 flex justify-center">Select your Eye Color</h1>
            <div class="eye-color-boxes flex justify-between px-5">
              <!-- <input type="radio" id="1" value="1" v-model="form.eyeColor" />
              <label for="1">1</label>
              <input type="radio" id="2" value="2" v-model="form.eyeColor" />
              <label for="2">2</label>
              <input type="radio" id="3" value="3" v-model="form.eyeColor" />
              <label for="3">3</label>
              <input type="radio" id="4" value="4" v-model="form.eyeColor" />
              <label for="4">4</label>
              <input type="radio" id="5" value="5" v-model="form.eyeColor" />
              <label for="5">5</label>-->
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
        <div id="selected">
          <h1 class="first-parent font-bold text-success">First Parent:</h1>
          <p class="gender-selected">Gender: {{ form.gender }}</p>
          <p class="name-selected">Name: {{ form.firstName }}</p>
          <p class="skin-selected">Skin tone: {{ form.skin.name }}</p>
          <p class="hairtype-selected">Hair type: {{ form.hairType.name }}</p>
          <p class="haircolor-selected">Hair color: {{ form.hairColor.name }}</p>
          <p class="eyeshape-selected">Eye shape: {{ form.eyeShape.name }}</p>
          <p class="eyecolor-selected">Eye color: {{ form.eyeColor }}</p>
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
  components: {},
  data: function() {
    return {
      step: 1,
      totalsteps: 3,
      errors: [],
      selectedItem: {},
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
        // Hair Type Male
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
        // Eye Shape Female
        eyeShapeFemale: [
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
        eyeColor: null
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
        }
        if (this.form.gender) {
          this.errors = "";
        }
        if (!this.form.firstName) {
          this.errors = "Please type the parent name";
          return false;
        }
        if (!this.form.skinToneMale || !this.form.skinToneFemale) {
          this.errors = "Please select the skin tone";
          return false;
        }
      }
      if (this.step == 2) {
        if (!this.form.hairType) {
          this.errors = "Please select the hair type";
          return false;
        }
        if (!this.form.hairColor) {
          this.errors = "Please select the hair color";
          return false;
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
#form {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
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
.b-counter {
  display: none !important;
}

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
</style>

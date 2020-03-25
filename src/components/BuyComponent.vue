<template>
  <div class="buy-component" v-if="isHiddenChild  && isHiddenParent">
    <p class="buy__item buy__item--title">Thank you</p>
    <p class="buy__item buy__item--subtitle">Please check all details and proceed to payment.</p>
    <div class="buy__item buy__item--buttons">
      <div class="reset">
        <a href="/">Start all over?</a>
      </div>
      <div class="add-cart" v-on:click="retrieveValues">
        <!-- Use ngrok to test the cart locally -->
        <button
          class="snipcart-add-item"
          id="my-button"
          data-item-id="1"
          data-item-name="Default Title"
          data-item-description="Default details Child"
          data-item-custom1-name="Default details Parent"
          data-item-price="30.00"
          data-item-quantity="1"
          data-item-url="http://67acde2b.ngrok.io/"
        >Add To Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
// jquery just for Snipcart
import $ from "jquery";

export default {
  name: "BuyComponent",
  data: function() {
    return {};
  },
  props: {
    isHiddenChild: Boolean,
    isHiddenParent: Boolean
  },
  methods: {
    getValueAll() {
      var childValues = $("#selectedChild").text();
      var parentValues = $("#selectedParent").text();
      var childName = $(
        "#selectedChild .selected__item--name .selected__item__text"
      ).text();
      var parentName = $(
        "#selectedParent .selected__item--name .selected__item__text"
      ).text();
      // Changes Title
      $("#my-button").attr(
        "data-item-name",
        "The book of " + parentName + " & " + childName
      );
      // Adds Child Values
      $("#my-button").attr("data-item-description", childValues);
      // Adds Parrent
      $("#my-button").attr("data-item-custom1-name", parentValues);
    },
    retrieveValues: function() {
      this.getValueAll();
    }
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "../scss/_mixins.scss";
@import "../scss/_fonts.scss";
.buy-component {
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  .buy__item {
    &--title {
      font-family: $secondaryFont;
      color: $primary;
      font-size: 40px;
    }
    &--buttons {
      display: flex;
      width: 300px;
      justify-content: space-between;
      align-items: center;
      .add-cart {
        button {
          background-color: $primary;
          border: none;
          padding: 5px 15px;
          color: white;
          transition: 0.2s ease;
          &:hover {
            background-color: lighten($color: $primary, $amount: 20%);
            color: $tertiary;
          }
        }
      }
      .reset {
        a {
          text-decoration: none;
          background-color: darken($color: $secondary, $amount: 30%);
          color: white;
          padding: 5px 15px;
          transition: 0.2 ease;
          &:hover {
            background-color: darken($color: $secondary, $amount: 10%);
          }
        }
      }
    }
  }
}
</style>
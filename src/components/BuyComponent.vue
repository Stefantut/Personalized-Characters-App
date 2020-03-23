<template>
  <div class="buy-component" v-if="isHiddenChild  && isHiddenParent">
    <div class="buy__item buy__item--btn" v-on:click="retrieveValues">
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
      >Buy now</button>
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
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  .buy__item {
  }
}
</style>
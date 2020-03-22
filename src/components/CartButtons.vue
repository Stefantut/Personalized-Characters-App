<template>
  <div class="cart">
    <div class="cart__items snipcart-checkout">
      <img src="../assets/shopping-bag.svg" alt="shopping-bag" />
      <span class="snipcart-items-count"></span>
    </div>

    <img src="../assets/cart.svg" alt="cart" class="cart-image snipcart-checkout" />
    <span class="snipcart-total-price snipcart-checkout"></span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import ".././scss/_variables.scss";
@import ".././scss/_mixins.scss";
@import ".././scss/_fonts.scss";
// Shopping cart buttons
.cart {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  .cart__items {
    display: flex;
    align-items: flex-start;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 20px;
      margin-right: 3px;
    }
  }
  .cart-image {
    margin: 0 10px;
    width: 20px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
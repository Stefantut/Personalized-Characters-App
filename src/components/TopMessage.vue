<template>
  <div class="top-section">
    <div class="logo">
      <img src="../img/logo-new.svg" alt="logo" class="item item--image" />
      <p class="item item--text">Company Name</p>
    </div>
    <div class="message">
      <!-- <img src="../assets/star.svg" class="star" /> -->
      <svg
        version="1.1"
        class="star"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="512px"
        height="512px"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        xml:space="preserve"
      >
        <title>ionicons-v5-e</title>
        <path
          stroke="#f1d1b5"
          stroke-width="30"
          stroke-linejoin="square"
          d="M480,208H308L256,48l-52,160H32l140,96l-54,160
	l138-100l138,100l-54-160L480,208z"
        />
      </svg>

      <p class="message-text">Sale Now: Use Code SALE15</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import ".././scss/_variables.scss";
@import ".././scss/_mixins.scss";
@import ".././scss/_fonts.scss";
.top-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding-left: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    .item {
      &--image {
        width: 60px;
      }
      &--text {
        margin-left: 10px;
        margin-bottom: 0;
      }
    }
  }
  .message {
    height: 40px;
    font-family: $secondFont;
    padding: 10px 20px;
    margin-top: -10px;
    background-color: darken($color: $four, $amount: 30%);
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    border: 1px solid $five;
    border-bottom-left-radius: 20px;
    @include default-transition;
    cursor: default;
    &:hover {
      .star {
        transform: translateX(-10px) rotate(160deg);
        margin-left: 15px;
        path {
          fill: $one;
        }
      }
    }
    .star {
      height: 25px;
      width: 25px;
      margin-right: 15px;
      transform: rotate(45deg);
      @include default-transition;
    }
    .message-text {
      margin: 0 auto;
    }
  }
}
</style>

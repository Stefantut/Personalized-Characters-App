<template>
  <div class="top-section">
    <div class="logo">logo</div>
    <div class="message">
      <img src="../assets/star.svg" class="star" />
      <p class="message-text">Sale Now: Use Code VICTOR15</p>
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
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding-left: 20px;
  }
  .message {
    font-family: $secondFont;
    padding: 20px;
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
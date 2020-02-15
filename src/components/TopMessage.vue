<template>
  <div class="top-section">
    <div class="logo">logo</div>
    <div class="message">
      <p class="message-text">Sale Now: Use Code VICTOR15</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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
    margin-right: 20px;
    .message-text {
      margin: 0 auto;
    }
  }
}
</style>
<template>
  <div class="bottom-section">
    <footer class="footer">
      <p class="item item__text">Made with</p>
      <svg
        class="item item__image"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1735 1601"
      >
        <image
          width="1735"
          height="1601"
          xlink:href="data:img/png;base64,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"
        />
      </svg>

      <p class="item item__text">
        by STD
        <span>© {{ new Date().getFullYear() }}</span>
      </p>
    </footer>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.bottom-section {
  height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  .footer {
    display: flex;
    .item {
      &__text {
        margin-bottom: 0;
        font-size: 14px;
        span {
          font-size: smaller;
        }
      }
      &__image {
        margin: 0 5px;
        width: 15px;
        height: auto;
        animation: pulse 3s infinite;
        transition: 0.2s ease-in;
      }
    }
    &:hover {
      cursor: grab;
      .item {
        &__image {
          filter: invert(1);
        }
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~pretty-checkbox/src/pretty-checkbox.scss";`
      }
    }
  }
};

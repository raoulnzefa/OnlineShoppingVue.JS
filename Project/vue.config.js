module.exports = {
  // publicPath: '/vue-deploy/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/SCSS/Helpers/_variables.scss";
                    @import "@/assets/SCSS/Helpers/_mixin.scss";
                    @import "@/assets/SCSS/Helpers/_classes.scss";
                    @import "@/assets/SCSS/Components/_button.scss";
                    @import "@/assets/SCSS/Components/_inputs.scss";
                    @import "@/assets/SCSS/Venders/_venders.scss"; 
                    @import "@/assets/SCSS/Layouts/_logo.scss"; `
      }
    }
  }
};
<template>
  <div class="app">
    <div class="container">
      <div class="row">
        <div class="col-md-3 text-center">
          <logo-component></logo-component>
        </div>
        <div class="col-md-6 d-md-flex justify-content-md-center">
          <navbar-component></navbar-component>
        </div>
        <div class="col-md-3 rightbarComponent">
          <rightbar-component></rightbar-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./../LowerHeader/Navbar.vue";
import Rightbar from "./../LowerHeader/Rightsideofheader.vue";

export default {
  components: {
    navbarComponent: Navbar,
    rightbarComponent: Rightbar
  }
};
</script>
<style scoped lang="scss">
.app{
  .rightbarComponent{
    display: $LowerHeaderRightDisplay;
    justify-content: $LowerHeaderRightJustifycontent;
    margin: $LowerHeaderRightMargin;
  }
}
</style>
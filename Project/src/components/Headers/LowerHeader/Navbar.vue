<template>
  <div class="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>Menu
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav links">
          <li class="nav-item" v-for="item in NavItems" :key="item.content">
            <router-link class="nav-link" :to="item.to">{{item.content}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      NavItems: [{ to: "/", content: "HOME" }, { to: "/", content: "SHOP" },{ to: "/", content: "BLOG" },
       { to: "/", content: "CONTACT" }, { to: "/", content: "ABOUT" } ]
    };
  },
  mounted() {
    $(".collapse").collapse();
  }
};
</script>
<style scoped lang='scss'>
.app {
  @include navbarStyle(
    $LowerHeaderNavTransition,
    $LowerHeaderNavColor,
    $DarkColor,
    $LowerHeaderNavFont
  );

  .navbar-toggler,.navbar-toggler-icon {
    color: $DarkColor;
  }
}
</style>
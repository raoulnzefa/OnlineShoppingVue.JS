<template>
  <div class="Feature">
    <h2 class="HomeH2">Featured Products</h2>
    <nav class="nav justify-content-center">
      <router-link class="active" to="/">
        <img src="@/assets/HomePhotos/Feature/Home-F1.png" alt="logo" />
        <p>LATEST</p>
      </router-link>
      <router-link to="/">
        <img src="@/assets/HomePhotos/Feature/Home-F2.png" alt="logo" />
        <p>TOP RATING</p>
      </router-link>
      <router-link to="/">
        <img src="@/assets/HomePhotos/Feature/Home-F3.png" alt="logo" />
        <p>BEST SELLERS</p>
      </router-link>
      <router-link to="/">
        <img src="@/assets/HomePhotos/Feature/Home-F4.png" alt="logo" />
        <p>FEATURED</p>
      </router-link>
    </nav>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    $("a").on("click", function() {
      $(".active").removeClass("active");
      this.className += " active";
    });
  }
};
</script>
<style scoped  lang="scss">
h2{
  background: $HomeFeatureBackground;
  @extend .HomeH2;
}
a {
  @include anchor(none, $PrimaryColor);
  padding: $HomeFeatureAPadding;
  text-align: $HomeFeatureATextalign;
}
.active,a:hover {
  color: $DarkColor;
}
p {
  font-weight: $HomeFeaturePFontWeight;
}
</style>
<template>
  <div class="app">
    <div class="container d-md-flex justify-content-around">
      <p class="nav-link text-center">
        <font-awesome-icon icon="phone-alt" /> +201285964007
      </p>
      <a class="nav-link text-center" href="mailto:dalia.tarek.96@hotmail.com">
        <font-awesome-icon icon="paper-plane" /> dalia.tarek.96@hotmail.com
      </a>
      <p class="nav-link text-center">3-5 Business Days Delivery &#38; Free Returns</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  @include backgroundFH($PrimaryColor, $UpperHeaderPadding);
    
  a,p {
    color: $WhiteColor;
    font-size: $UpperHeaderFontSize;
    margin: $UpperHeaderMargin;
    transition: $LogoPTransition;
  }
  a:hover{
    color: $SecondaryColor;
    transform: scale($UpperHeaderFontScale);
  }
}
</style>
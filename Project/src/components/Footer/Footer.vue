<template>
    <div class="app">
      <div class="container">
        <div class=" row">
            <div class="col-12 text-center col-md-6 text-md-left">
                <p>Copyright &copy; 2020.All Rights Reserved by Dalia Tarek <font-awesome-icon class="heart" icon='heart' size='lg'/> </p>
            </div>
            <div class="col-12 pt-3 text-center col-md-6 text-md-right pt-md-0">
                <a href="#"><font-awesome-icon  :icon='["fab","twitter"]'     size='lg' pull="right"/></a>
                <a href="#"><font-awesome-icon  :icon="['fab','facebook-f']"  size='lg' pull="right"/></a>
                <a href="#"><font-awesome-icon  :icon='["fab","linkedin-in"]' size='lg' pull='right'/></a>
                <a href="#"><font-awesome-icon  :icon='["fab","pinterest-p"]' size='lg' pull='right'/></a>
            </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped lang="scss" >

 .app{
     @include backgroundFH($backgroundColor,$padding);
     p{
         color: $textColor;
         margin: 0;
         .heart{
             color: $hovercolor;
         }
     }
    a{
         color: $textColor;
         display: inline-flex;
         padding: 0 $padding;
    }
    a:hover{
         color: $hovercolor ;
    }

 }
</style>
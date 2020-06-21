<template>
  <div class="app">
    <i class="m-2" data-toggle="modal" data-target="#Search"> <font-awesome-icon size='2x' icon="search" /> </i>
    <i class="m-2"> <font-awesome-icon size='2x' icon="user" /></i>
    <i class="m-2"> <font-awesome-icon size='2x' icon="shopping-cart" /></i>

    <!-- modal of search -->
    <div class="modal fade" id="Search" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
        <button type="button" class="close text-right" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <br/><br/><br/><br/><br/><br/><br/>
        <form>
          <div class="input-group">
            <input type="text" class="form-control form-control-lg" placeholder="Search..."/>
          <button  class="btn"><font-awesome-icon class=" input-search" icon="search" size='lg'/></button>
          </div><hr/>
        </form>
        <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  </div>
</div>
  </div>
</template>
<style scoped lang='scss'>
.app{
  i{
    color: $DarkColor;
    cursor:$LowerHeaderRightIconCursor;
  }
  i:hover{
    color: $SecondaryColor;
    transition: $LogoPTransition;
  }
  .modal-content{
    background-color: $LowerHeaderRightModalBKColor;
    border: $LowerHeaderRightModalBKBorder;
    @extend .searchButton;
  }
}
</style>
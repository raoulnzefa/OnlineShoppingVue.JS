<template>
  <div class="app">
    <h2>Add New category</h2>
    <vue-form class="mainData p-3 " :state="formstate" @submit.prevent="onSubmit">
      <p class='h5 '>Choose Main Category</p>
      <validate class='input-group'>
          <select  class="form-control" name="MainCategory">
              <option selected disabled>Select Main Category</option>
          </select>
      </validate>
      <p class='h4 m-3'>OR</p>
      <p class='h5'>New Main Category</p>
      <validate class='input-group'>
          <input placeholder="Name of main category" class='form-control' name="MainCategory"/>
      </validate><hr/>
      <p class='h5'>New Branch Category</p>
      <validate class='input-group'>
          <input placeholder="Name of Branch category" class='form-control' name="BranchCategory"/>
      </validate>
      <button class="bnn cta"  type="submit">
                 <span>Save Data</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
            </button> 
    </vue-form><hr/>
  </div>
</template>
<script>
export default {
    data(){
        return{
            formstate:{}
        }
    },
    methods:{
        onSubmit:function(){
            console.log(this.formstate)
        }
    }
};
</script>
<style scope lang="scss">
.app{
    @extend .submitButton;
    @extend .mainDataForm;
     .bnn {
        text-decoration: none;
        color: inherit;
        background:white;
          border:none;
      }
h2 {
  font-family: $fonts;
  color: $colorDark;
  text-shadow: $colorOrange 1px 1px 1px;
}
.h4{
    color: $colorOrange;
}
}

</style>
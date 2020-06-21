<template>
    <div class="container app">
        <vue-form :state='formState' @submit.prevent="onSubmit" > 
            <div class="row">
                <div class="mainData  col-md-3 mt-3 mr-3 ml-3">
                    <validate class="input-group" :class="ValidateImage?'was-validated':''">
                        <div class="custom-file">
                            <input type="file" accept="image/*" @change='upload($event)'  required class="custom-file-input" name='Image' id="Image">
                            <label class="custom-file-label" for="Image">Choose file</label>
                        </div>
                    </validate>
                    <img  :src='ImageURL' alt="Product Image"/>
                </div>
                <div class="mainData col-md-8 m-3">
                    <h3>Basic Information</h3>
                    <validate  class='input-group' :class=" classFieldValidate(formState.Name)">
                        <div class="input-group-prepend"><label class="input-group-text">Product Name</label></div>
                        <input  type="text" class="form-control " name='Name' required minlength="6" v-model.lazy="model.Name" />
                        <field-messages  class="invalid-feedback" name='Name'>
                            <span slot="required">Product Name is required ...</span>
                            <span slot="minlength">Product Name must contain at least 6 letters... </span>
                        </field-messages>
                    </validate>
                    <validate class="input-group" :class="classFieldValidate(formState.Description) ">
                        <div class="input-group-prepend"><label class="input-group-text">Description</label></div>
                        <textarea class="form-control textarea" name='Description' v-model.lazy="model.Description" required minlength="20"></textarea>
                        <field-messages class="invalid-feedback" name='Description'>
                             <span slot="required">Description is required ...</span>
                            <span slot="minlength">Description must contain at least 20 letters... </span>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="mainData p-3 mr-md-4">
                <h3>Currency Information</h3>
                <div class="row">
                    <div class="col-md-5 m-2">
                        <validate class="input-group" :class="classFieldValidate(formState.Price)">
                            <div class="input-group-prepend"><label class="input-group-text">Price</label></div>
                            <input class="form-control" type="number" name='Price' required oninput="this.value=Math.abs(this.value)" v-model.lazy='model.Price' /> 
                            <div class="invalid-feedback">Price is required</div>
                        </validate>
                        <validate class="form-group required-field" :class='classFieldValidate(formState.Sale)'>
                            <label class="h5 mb-3">Sale :</label>
                            <br/>
                            <span class="mr-3" v-for="salee in SaleVal" :key="salee.name">
                                <input  type="radio" required name="Sale" v-model.lazy='model.Sale' :value="salee.value"/>
                                <span class="h6 ml-3">{{salee.name}}</span>
                            </span>
                        </validate>
                    </div>
                    <div class="col-md-5 m-2">
                        <validate class="input-group" :class="classFieldValidate(formState.Quantity)">
                            <div class="input-group-prepend"><label class="input-group-text">Quantity</label></div>
                            <input class="form-control" type="number" name='Quantity' required oninput="this.value=Math.abs(this.value)" v-model.lazy='model.Quantity' /> 
                            <div class="invalid-feedback">Quantity is required...</div>
                        </validate>
                        <validate class="input-group" :class="classFieldValidate(formState.SaleAmount)">
                            <div class="input-group-prepend"><label class="input-group-text">Sale Amount</label></div>
                            <input class="form-control" type="number" name='SaleAmount' :disabled='model.Sale!=true'  :required='model.Sale==true' oninput="this.value=Math.abs(this.value)" v-model.lazy='model.SaleAmount' /> 
                            <div class="invalid-feedback">Sale Amount is required...</div>
                        </validate>
                    </div>
                </div>
            </div>
            <div class="mainData p-3 mr-md-4">
                <h3>Categories Information</h3>
                <validate class="input-group" :class="classFieldValidate(formState.MainCategory)">
                    <select class="custom-select"  required v-model.lazy='model.MainCategory' name='MainCategory'>
                         <option disabled selected value="">Select Category </option>
                        <option v-for='category in categories ' :key="category._id" :value='{_id:category._id ,name:category.MainCategory}'>{{category.MainCategory}}</option>
                    </select>
                     <div class="invalid-feedback">MainCategory must be selected ...</div>
                </validate>
                <validate class="input-group" :class="classFieldValidate(formState.BranchCategory)">
                    <select class="custom-select "  required v-model.lazy='model.BranchCategory' name='BranchCategory'>
                        <option disabled selected value=''>Select Sub-Category </option>
                        <option v-for='category in categories ' :key="category._id" :value='category._id' v-show='category.MainCategory==model.MainCategory.name?true:false'>
                             {{category.BranchCategory}}
                        </option>   
                    </select>
                     <div class="invalid-feedback">Sub-Category must be selected ...</div>
                </validate>      
            </div>
            <button class="bnn cta"  type="submit">
                 <span>Save Data</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
            </button>   
        </vue-form>  
    </div>
</template>
<script>
import {mapMutations } from 'vuex'  
import Vue from 'vue'
export default {
    data(){
        return{
            formState:{},disabled:false,categories:[],ImageURL:'',Image : '',ValidateImage:false,formData : new FormData(),
            model:{ Name : '',Price : '',Quantity :'', Description :'', Sale : 'false',
                SaleAmount : 0,MainCategory   :'',BranchCategory :'' },SaleVal:[{name:'ON',value:true},{name:'OFF',value:false}]
        }
    },
      created:function(){// to hide main Header
        this.navShow();
        Vue.axios.get(this.CategoryURL).then(data=>this.categories=data.data).catch(()=>{});
    },
    methods:{
        ...mapMutations(['navShow']),
        classFieldValidate:function(field){
            if(!field) return '';
            if(field.$touched || field.$submitted) {return 'was-validated';}
        },
        upload:function(event){
            this.Image = event.target.files[0];
            // to preview Image
            const fileReader = new FileReader();
            fileReader.readAsDataURL(this.Image);
            fileReader.onload = e=>{this.ImageURL = e.target.result;}
        },
        saveData:function(){
            this.formData.append('Image',this.Image);
            this.formData.append('AllData',JSON.stringify(this.model));
        },
        onSubmit:function(){
            if (this.Image =='')this.ValidateImage= true;else this.ValidateImage = false; // to validate input file 
            this.saveData();
            if(this.formState.$valid&&!this.ValidateImage){// for save  Data 
                Vue.axios.post(this.ProductsURL,this.formData,{headers: {
                    'Content-Type': 'multipart/form-data' }}).then(()=>{
                        this.$router.push('/List');
                    }).catch(()=>{});
            }}},      
}
</script>
<style  lang='scss' scoped>
.app{
    
    @extend .disappearNumberArrows;
    @extend .textarea;
    @extend .mainDataForm;
    img{
        @include Image($widthImg,$heightImg,$displayImg);
    }
        @extend .submitButton;
        .bnn {
        text-decoration: none;
        color: inherit;
        background:white;
          border:none;
      }
    h3{
        color: $colorDark;
        text-shadow: $text-shadowh3  1px 1px 1px;
    }
}
</style>
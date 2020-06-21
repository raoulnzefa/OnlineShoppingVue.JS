<template>
    <div class="app">
        <!-- 2-to print 3-convert to pdf -->
      <data-tables :data='products' stripe responsive :filters='filters'  :action-col="actionCol" border='true'>
           <el-row slot="tool" style="margin: 10px 30px">
                <el-col :span="14">
                    <el-dropdown @command='HandleClick'>
                    <el-button class='btn btn-warning' style="color:white;">{{searchcategory}}<i class="el-icon-caret-bottom el-icon--right"></i></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>Main Category</el-dropdown-item>
                        <el-dropdown-item v-for='cat of selectMainCategories' :key="cat" :command="cat">{{cat}}</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>

                    <el-select class='ml-5' v-show ='BranchAppear' v-model="filters[1].value" multiple="multiple">
                        <el-option v-for='pro of selectBranchCategories' :key="pro" :label="pro" :value="pro"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="4" :offset="4"><el-input v-model="filters[0].value"  placeholder='Search'></el-input></el-col>
            </el-row>
            <el-table-column prop="flow_no" label="No." sortable="custom" type="expand">
                <template slot-scope="props">
                    <p><span class='h6'>Description: </span>{{ props.row.Description }}</p>
                    <p><span class='h6'>Sale: </span>{{ props.row.Sale }}</p>
                    <p><span class='h6'>SaleAmount: </span>{{ props.row.SaleAmount }}</p>
                    <p><span class='h6'>MainCategory: </span> {{ props.row.Category.MainCategory }}</p>
                    <p><span class='h6'>BranchCategory:</span> {{ props.row.Category.BranchCategory }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="Name" label="Name" sortable="custom" align='center'/>
            <el-table-column props='Image' label="Image" sortable="custom" align='center'>
                <template slot-scope="props">
                    <img :src="props.row.Image" alt="product Image"/>
                </template>
            </el-table-column>
            <el-table-column prop="Price" label="Price" sortable="custom" align='center'/>
            <el-table-column prop="Quantity" label="Quantity" sortable="custom" align='center'/>
        </data-tables>
        <!--Delete Confirm   -->
        <div class="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="exampleModalLabel">Warning</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="dataToDelete={}">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body"> Are you sure you want to delete this item ? </div>
                    <div class="modal-footer"> <button type="button" class="btn btn-dark" data-dismiss="modal" @click="deleteItem">Delete</button> </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<script>
import Vue from 'vue'
import {mapMutations } from 'vuex'  
// set language to EN
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

export default {
    data(){
        return{
            AllProducts:[],products:[],dataToDelete:{},selectCategories:'None',selectMainCategories:['All'],searchcategory:'Search For',
             BranchAppear:false,selectBranchCategories:[],
             filters: [{
                    value: '',
                    prop: ['Name','Price','Quantity','Description']
                }, {
                    value: [],
                      filterFn: (row,filter) => {
                        return Object.keys(row).some(prop => {
                        if (prop == 'Category') 
                            return row.Category.BranchCategory.indexOf(filter.value) > -1})
                        }
                }],
            actionCol:{
                label:'Operations',
                props:{align:'center','min-width':'100px'},
                buttons:[{
                    props:{class:'btn btn-warning mb-2', icon: 'el-icon-edit'},
                    handler:(row)=>{
                        this.$router.push({name:'Edit',params:{_id:row._id}});
                    },
                    label:'Edit',},{
                    props:{'data-toggle':"modal", 'data-target':"#exampleModal", class:'btn btn-outline-dark mb-2',
                    'data-backdrop':"static", 'data-keyboard':"false"},
                    handler:row=>{ this.dataToDelete = row;},
                    label:'Delete'
                }]
            }
         }
    },
    created:function(){
        Vue.axios.get(this.ProductsURL).then(data=>{
            this.AllProducts=data.data;this.products=this.AllProducts;
            this.AllProducts.forEach(data =>{// to set main category in search 
                 if(this.selectMainCategories.indexOf(data.Category.MainCategory)==-1)
                     this.selectMainCategories.push(data.Category.MainCategory);
            });}).catch(()=>{});
        this.navShow();
    },
    methods:{
        ...mapMutations(['navShow']),
        deleteItem:function(){
            Vue.axios.delete(this.ProductsURL, {data:{_id: this.dataToDelete._id}}).then(()=>{
                this.products.splice(this.products.indexOf(this.dataToDelete), 1);
                this.dataToDelete={};}).catch(()=>{});
        },
        HandleClick:function(event){
            if(event=='All'){this.BranchAppear = false;this.filters[1].value=[]; this.selectBranchCategories=[]; }
            else{
                this.BranchAppear = true;this.selectBranchCategories=[]; 
                this.filters[1].value=[];   
                this.AllProducts.forEach(data=>{
                    if(data.Category.MainCategory == event){
                        if(this.selectBranchCategories.indexOf(data.Category.BranchCategory)==-1)
                             this.selectBranchCategories.push(data.Category.BranchCategory);
                    }
                });
            }
        }
        }
}
</script>
<style scoped lang='scss'>
.app{
    margin:50px 0;
    img{
    @include Image(80px,80px,inline);
    }
}
</style>
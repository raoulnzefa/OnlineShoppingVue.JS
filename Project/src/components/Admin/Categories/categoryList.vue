<template>
  <div class="app">
      <h2 class="mb-5">All categories</h2>
    <!-- edit button -->
    <div class="mb-5">
      <el-row>
        <el-col :span="10">
          <el-input v-model="filter[0].value" placeholder="Search by Branch Category"></el-input>
        </el-col>
      </el-row>
    </div>
    <data-tables stripe responsive :data="categories" align="center" :filters="filter" :action-col="actionCol">
      <el-table-column :filters="filters" :filter-method="filterHandler" prop="MainCategory" align="center" sortable="custom" label="Main Category" ></el-table-column>
      <el-table-column prop="BranchCategory" align="center"  sortable="custom" label="Branch Category" ></el-table-column>
    </data-tables>
    <!-- Modal for delete -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Delete Category !</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">If you delete this category, All of its products will be deleted !
              <!-- to select new category instead of deleted one -->
            <div v-show='appear'>
                <select class="form-control mt-5" v-model='newCategory'>
                    <option disabled selected value=null>Select Another Category </option>
                    <option v-for=' category of categories' :key="category._id" :value="category._id" v-show="category._id!=categoryToDelete._id?true:false">
                        Main Category : {{category.MainCategory}},<br/> Branch Category : {{category.BranchCategory}} </option>
                </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-show='!appear' @click="appear=true">Select Another Category</button>
            <button type="button" class="btn btn-secondary" v-show='appear' :disabled='newCategory==null' data-dismiss="modal" @click="changeCategory">Save</button>
            <button type="button" class="btn btn-danger" @click="deleteWithProduct" data-dismiss="modal">Delete Anyway</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      categories: [],newCategory:null,appear:false,
      filter: [{ value: "", prop: ["BranchCategory"] }],
      categoryToDelete: "",
      actionCol: {
        label: "Operations",
        props: { align: "center" },
        buttons: [
          {
            label: "Edit",
            props: { class: "btn btn-warning mb-2", icon: "el-icon-edit" },
            handler: (row) => {this.categoryToDelete = row; }
          },
          {
            label: "Delete",
            props: { class: "btn btn-outline-dark mb-2",
              icon: "el-icon-edit","data-backdrop": "static", "data-keyboard": "false", "data-toggle": "modal",
              "data-target": "#exampleModalCenter"
            },
            handler: row => {this.categoryToDelete = row; }  } ]
      }
    };
  },
  created() {
    Vue.axios.get(this.CategoryURL).then(data => (this.categories = data.data)).catch(() => {});
  },
  computed: {
    filters: function() { // to search main categories
      let categories = [];
      this.categories.forEach(data => {
        categories.push({ text: data.MainCategory, value: data.MainCategory });
      });
      return categories;
    }
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    deleteWithProduct: function() {
      Vue.axios.delete(this.CategoryURL,{data:{_id:this.categoryToDelete._id }}).then(()=>{this.disappearCategory(); }).catch(()=>{})
    },
    changeCategory:function(){
        Vue.axios.put(this.CategoryChangeURL,{_idDelete:this.categoryToDelete._id,_idUpdate:this.newCategory})
        .then(()=>{this.disappearCategory();}).catch(()=>{});
    },
    disappearCategory:function(){
        this.categories.splice(this.categories.indexOf(this.categoryToDelete),1);
          this.categoryToDelete={};
    }
  }
};
</script>
<style scoped lang="scss">
h2 {
  font-family: $fonts;
  color: $colorDark;
  text-shadow: $text-shadowh3 1px 1px 1px;
}
</style>
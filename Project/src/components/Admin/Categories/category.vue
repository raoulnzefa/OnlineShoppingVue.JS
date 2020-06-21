<template>
  <div class="row app">
    <div class="col-md-4">
      <category-add></category-add>
    </div>
    <div class="col-md-8">
      <category-list></category-list>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import categoryList from "./categoryList.vue";
import categoryAdd from "./categoryAdd";

export default {
  created() {
    this.navShow();
  },
  components: {
    categoryList: categoryList,
    categoryAdd: categoryAdd
  },
  methods: {
    ...mapMutations(["navShow"])
  }
};
</script>
<style scoped lang="scss">
.app {
  margin: $marginCategory;
}
</style>
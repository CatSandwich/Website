<template>
  <div class="project-container">

    <!-- Header -->
    <div class="project-header">
      <h2 style="margin: 0;"><a :href="source">{{name}}</a></h2>
      <div><category v-for="category in categories" :text="category" style="float: right" :key="category"/></div>
    </div>

    <slot/>
  </div>
</template>

<script>

import Category from './Category.vue'

export default {
  components: {
    Category
  },
  props: ['name', 'categories', 'source']
}

</script>

<style>

.project-container{

  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;

  width: 100%;
  background-color: var(--tone1);
}

.project-header{
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--tone2);
}

.center:before{
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

</style>
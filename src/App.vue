<template>
  <div id="app">

    <div class="sidebar">
      <img class="home-icon" src="@/assets/catsandwich.png" @click="$router.push('/')"/>
      <nav-link to="/about" text="About"/>
      <nav-link to="/contact" text="Contact"/>
      <nav-link to="/projects" text="Projects"/>
    </div>

    <div class="right-container">
      <main><router-view/></main>

      <div class="bottom">
        <div style="margin: 0 auto; display: inline-flex">
          <p>&copy; 2021 Joshua Torrington-Smith</p>
          <p style="padding: 0 10px;">|</p>
          <p><a href="https://github.com/CatSandwich/Website">Source</a></p>
          <p style="padding: 0 10px;">|</p>
          <p><a href="https://github.com/CatSandwich">GitHub</a></p>
          <p style="padding: 0 10px;">|</p>
          <p><router-link to="/">Home</router-link></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import NavLink from './components/NavLink.vue'

export default {
  components: {
    NavLink
  }
}

</script>

<style>

.sidebar{
  position: fixed;
  height: 100%;
  width: var(--sidebar-width);
  background-color: var(--tone1);
  border-right: 1px solid var(--tone2);
  box-sizing: border-box;
}

.right-container{
  margin-left: var(--sidebar-width);
}

main{
  padding: var(--main-top) var(--main-padding) 0 var(--main-padding);
  min-height: calc(100vh - var(--bottom-height) - var(--main-top));
}

.bottom{
  height: var(--bottom-height);
  background-color: var(--tone1);
  border-top: 1px solid var(--tone2);
  box-sizing: border-box;
  display: flex;
}

.home-icon{
  padding: 0 calc((var(--sidebar-width) - var(--icon-size)) / 2);
}

.home-icon:hover{
  background-color: var(--tone4);
}

</style>

<template>
  <div style="width: 100%">
    <div class="root" :class="{'underline': $route.path.includes(to)}" @click="$router.push(to)">{{ text }}</div>
    <div class="slot" v-if="$route.path.includes(to)"><slot/></div>
  </div>
</template>

<script>

export default {
  name: 'nav-link',
  props: ['to', 'text'],
  methods: {
    click(){
      if(this.$route.path === this.to) return;
      this.$router.push(this.to);
    }
  }
}

</script>

<style scoped>

.underline{
  text-decoration: underline;
}

.root{
  padding: 10px;
  color: var(--tone4);
  background-color: var(--tone1);
}

.root:hover{
  color: var(--tone1);
  background-color: var(--tone4);
}

.slot{
  width: calc(100% - 20px);
  margin-left: 20px;
}

</style>
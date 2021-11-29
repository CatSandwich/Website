<template>
  <div class="badge">
    <img :src="require('@/assets/' + img)" class="badge-icon"/>
    <span style="float: right; line-height: var(--badge-height);"><slot/></span>
  </div>
</template>

<script>

export default {
  props: ['img', 'link']
}

</script>

<style>

:root{
  --badge-height: 30px;
}

.badge{
  display: inline-block;
  background-color: var(--tone1);

  height: var(--badge-height);
  width: 200px;
  border-radius: 10px;
  padding: 10px;
}

.badge-icon{
  height: 100%;
}

</style>
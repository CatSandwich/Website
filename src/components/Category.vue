<template>
  <div class="category">
    <h4 style="margin: 0; color: var(--tone0);">{{text}}</h4>
    <slot/>
  </div>
</template>

<script>

export default {
  props: ['text']
}

</script>

<style>

.category{
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;

  background-color: var(--sandwich);
  display: flex;
}

</style>
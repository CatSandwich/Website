<template>
  <div>
    <h2>Joshua Torrington-Smith</h2>

    <div class="badge">
      <mail style="height: 100%"/>
      <a href="mailto:josh@joshts.ca">josh@joshts.ca</a>
    </div>

    <div class="badge">
      <phone style="height: 100%"/>
      <a href="tel:1-343-262-4802">+1 (343) 262-4802</a>
    </div><br/>

    <div class="badge">
      <discord style="height: 100%"/>
      <a href="https://discord.com/user/245583747947167754">CatSandwich#1259</a>
    </div>

    <div class="badge">
      <linkedin style="height: 100%"/>
      <a href="https://www.linkedin.com/in/catsandwich/">CatSandwich</a>
    </div>

  </div>
</template>

<script>

import Discord from '@/assets/Discord.vue'
import Linkedin from '@/assets/Linkedin.vue'
import Phone from '@/assets/Phone.vue'
import Mail from '@/assets/Mail.vue'

export default {
  components: {
    Discord,
    Linkedin,
    Phone,
    Mail
  }
}

</script>

<style>

.badge{

  --badge-height: 30px;

  display: inline-block;
  justify-content: space-between;

  background-color: var(--tone1);

  height: var(--badge-height);
  width: 200px;
  border-radius: 10px;
  padding: 10px;
  margin: 0 20px 20px 0;
}

.badge a{
  float: right;
  line-height: var(--badge-height);
}

</style>
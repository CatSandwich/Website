<template>
  <div>
    <h1>Website</h1>
    <p>This website is built ground-up using Vue.js. Here are some of the parts I'm proud of:</p>

    <h2>Snippet</h2>
    <p>
      To display code, I opted to use <a href="https://highlightjs.org/">highlight.js</a> via
      <a href="https://www.npmjs.com/package/vue-highlightjs">vue-highlightjs</a>. To make things easy,
      I decided to write up a quick component to either display static code, or pull and display code
      from a link:
    </p>
    <snippet link="https://raw.githubusercontent.com/CatSandwich/Snippets/main/Snippet.vue" lang="vue"/>
    <p>The above is displayed by: </p>
    <snippet content="<snippet link=&quot;https://raw.githubusercontent.com/CatSandwich/Snippets/main/Snippet.vue&quot; lang=&quot;vue&quot;/>"/>

    <h2>Navlink</h2>
    <p>
      The nav bar isn't anything special, but it does the job and it's incredibly
      easy to modify because of a small component I wrote:
    </p>
    <snippet content=""/>

  </div>
</template>

<script>

import Snippet from '@/components/Snippet.vue';

export default {
  components: {
    Snippet
  }
}

</script>
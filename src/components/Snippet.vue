<template>
  <pre v-highlightjs="html" :class="lang"><code style="display: block; overflow: auto; padding: 5px; border-left: 3px solid #c0ffee"/></pre>
</template>

<script>

import './Snippet.css'

export default{
  props: {
    link: String,
    start: Number,
    end: Number,
    content: String,
    lang: String
  },
  data: () => ({
    html: ''
  }),
  created(){
    if(this.link){
      fetch(this.link)
          .then(res => res.text())
          .then(text => text.split('\n'))
          .then(lines => this.html = lines.slice(this.start - 1 || 0, this.end || lines.length).join('\n'));
    }
    else{
      this.html = this.content || '';
    }
  }
}
</script>
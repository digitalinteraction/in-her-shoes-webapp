<template lang="pug">
  div#footer-bar
    footer.footer
      div.container
        div.content.has-text-centered
          p
            strong In Her Shoes

          p The source code is licensed under the
            a(href="https://opensource.org/licenses/MIT") MIT License

          p Copyright (c) 2018 Open Lab, Newcastle University All Rights Reserved.
</template>

<script>

export default {
  name: 'footer-bar',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>

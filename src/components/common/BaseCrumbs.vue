<template>
  <div class="top-crumbs">
    当前位置：{{pos}}
  </div>
</template>

<script>
export default {
  name: 'BaseCrumbs',
  props: {
    pos: String
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.top-crumbs {
  color: red;
}
</style>

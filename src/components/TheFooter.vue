<template>
  <footer>
    <mt-tabbar
      fixed
      v-model="selected"
    >
      <mt-tab-item id="home">
        <img
          slot="icon"
          src="./assets/images/tabbar_home.png"
          alt="tabbar_home"
        >
        首页
      </mt-tab-item>
      <mt-tab-item id="shop">
        <img
          slot="icon"
          src="./assets/images/tabbar_shop.png"
          alt="tabbar_shop"
        >
        店铺
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img
          slot="icon"
          src="./assets/images/tabbar_mine.png"
          alt="tarbar_mine"
        >
        我的
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newVal, oldVal) {
      this.$router.push({
        name: newVal
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>

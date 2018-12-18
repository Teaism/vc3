<template>
  <div id="app">

    <the-header></the-header>

    <router-view>
    </router-view>

    <the-footer></the-footer>

    <!-- <transition
      name="router-fade"
      mode="out-in"
    >
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition
      name="router-fade"
      mode="out-in"
    >
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition> -->
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

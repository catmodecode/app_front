<template class="no-scroll">
  <div>
    <transition name="fade">
      <splash-screen v-if="splashShow" />
    </transition>
    <router-view class="app-main" v-if="!splashShow" />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import SplashScreen from 'components/SplashScreen'
export default defineComponent({
  name: 'App',
  components: {
    SplashScreen,
  },
  data() {
    return {
      splashShow: true,
    }
  },
  mounted: function() {
    setTimeout(() => this.splashShow = false, 500)
    this.$store.dispatch('auth/refresh')
  }
})
</script>

<style lang="scss">
.app-main {
  max-width: 1000px;
  margin: auto;
}

a {
  color: $accent;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

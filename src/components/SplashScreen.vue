<template>
  <transition name="fade">
    <div class="fullscreen splash-screen">
      <div class="splash-container absolute-center">
        <q-img src="~assets/logo.png" class="splash-logo" no-spinner />
        <h1>AR Eagle</h1>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SplashScreen'
})
</script>

<style lang="scss" scoped>
.splash-screen, .splash-card {
    background-color: $dark;
}

.splash-logo {
    max-width: 300px;
    max-height: 300px;
}

.splash-container {
  max-width: 600px;
  max-height: 600px;
  text-align: center;
}

</style>

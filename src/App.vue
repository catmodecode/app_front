<template>
  <q-layout view="hHh lpR lFf">
    <router-view />
  </q-layout>
</template>
<script>
import authActions from "./actions/AuthActions";
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'App',
  data: function () {
        return {
            quasar: useQuasar()
        }
  },
  computed: {
      isAuth: function () {
          return authActions.getAuthStatus();
      },
      darkMode: function () {
          return this.$store.state.app.darkMode
      }
  },
  watch: {
      darkMode: function (darkMode) {
          this.quasar.dark.set(darkMode)
      }
  },
  created: function () {
      this.quasar.dark.set(this.darkMode)
  }
})
</script>

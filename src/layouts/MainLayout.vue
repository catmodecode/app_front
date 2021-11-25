<template>
  <q-layout>
    <header-component />
    <q-page-container>
    <menu-component />
      <router-view />
    </q-page-container>
    <footer-component />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderComponent from "components/Header/Header"
import MenuComponent from "components/Header/Menu"
import FooterComponent from "components/Footer/Footer"
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  components: {
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  },
  data () {
    return {
    }
  },
  computed: {
    isMobile: function() {
      return this.$q.platform.is.mobile
    }
  },
  mounted() {
    this.$q = useQuasar();
  },
})
</script>

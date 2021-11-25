<template>
  <q-layout v-if="isMobile">
    <header-mobile-component />
    <menu-mobile-component />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <q-layout v-else>
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
import HeaderMobileComponent from "components/Header/HeaderMobile"
import MenuComponent from "components/Header/Menu"
import MenuMobileComponent from "components/Header/MenuMobile"
import FooterComponent from "components/Footer/Footer"
import { useQuasar } from 'quasar'
import MenuMobile from '../components/Header/MenuMobile.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    HeaderComponent,
    HeaderMobileComponent,
    MenuComponent,
    MenuMobileComponent,
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

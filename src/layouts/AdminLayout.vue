<template>
  <q-layout>
    <header-component />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderComponent from "components/Header/Header"
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'AdminLayout',
  components: {
    HeaderComponent
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

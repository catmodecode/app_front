<template>
  <q-layout class="fullscreen">
    <header-component />
    <q-page-container>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>
    </q-page-container>
    <footer-component />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from "components/Header/Header"
import FooterComponent from "components/Footer/Footer"

export default defineComponent({
  name: 'Error404',
  components: {
    HeaderComponent,
    FooterComponent,
  }
})
</script>

<template>
  <q-header class="header">
    <q-toolbar>
      <q-img src="~assets/logo.png" :ratio="1/1" class="header-logo float-left" />
      <q-toolbar-title class="no-box-shadow">
        AR Eagle
      </q-toolbar-title>
      <q-btn color="primary" icon="menu" />
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'header-component',
})
</script>

<style lang="scss" scoped>

.header-logo {
  max-width: 80px;
  max-height: 80px;
}

.header {
  background-color: $dark-page;
}

.some-info {
  max-height: 150px;
  width: 220px;
  background-color: $dark-page;
}
</style>
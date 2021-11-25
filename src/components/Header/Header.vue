<template>
  <q-header class="header">
    <q-toolbar>
      <q-img src="~assets/logo.png" :ratio="1/1" class="header-logo float-left" @click="$router.push({name: 'index'})" />
      <q-toolbar-title class="no-box-shadow" @click="$router.push({name: 'index'})">
        AR Eagle
      </q-toolbar-title>
      <q-card class="some-info no-box-shadow q-pa-sm" flat >
        <q-card-section>
          <div class="text-subtitle1">Здесь будет</div>
          <div class="text-subtitle1">Какая-нибудь</div>
          <div class="text-subtitle1">Бесполезная</div>
          <div class="text-subtitle1">Информация</div>
        </q-card-section>
      </q-card>
      <q-card class="some-info no-box-shadow q-pa-sm">
        <q-card-section>
          <q-btn class="" v-if="false" color="primary" icon="login" label="Войти" width="130px" height="45px"/>
          <q-btn class="fit" v-else color="primary" icon="man" label="Профиль" width="130px" height="45px" @click="$router.push('profile')" />
        </q-card-section>
        <q-card-section>
          <q-btn class="fit" color="primary" icon="search" label="Поиск" width="130px" height="45px"/>
        </q-card-section>
      </q-card>
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
  max-width: 150px;
  max-height: 150px;
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
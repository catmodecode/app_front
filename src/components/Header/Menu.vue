<template>
<q-toolbar class="menu-bar">
  <q-btn-group class="fit" spread >
    <q-btn v-for="tab in items" v-bind:key="tab" color="primary" :label="tab">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-skeleton type="text" />
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-skeleton type="text" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-btn-group>
</q-toolbar>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'menu-component',
    data() {
      return {
        loading: true,
        items: ['Пункт 1','Пункт 2','Пункт 3','Пункт 4','Пункт 5',]
      }
    },
})
</script>

<style lang="scss" scoped>
.menu-bar {
  background-color: $dark-page;
}
</style>
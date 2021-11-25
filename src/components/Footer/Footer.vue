<template>
    <q-footer class="footer-main box-no-shadow">
        <q-toolbar>
            <div class="float-right">
                <a href="mailto:catmodecode@gmail.com"><q-icon name="copyright" />Catmodecode@gmail.com</a>
            </div>
        </q-toolbar>
    </q-footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'footer-component',
})
</script>

<style lang="scss" scoped>
.footer-main {
    background-color: $dark-page;
}
</style>
<template>
    <q-layout view="hHh lpR lFf">
        <router-view />
    </q-layout>
</template>
<script>
import authActions from "./actions/AuthActions";
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'
import ActionError from './classes/ActionError'
import Vue from 'vue'

export default defineComponent({
    name: 'App',
    data: function () {
        return {
            quasar: useQuasar()
        }
    },
    methods: {
        showException: function (message) {
            this.$q.notify({message})
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
        window.addEventListener("unhandledrejection", (error) => {
            if (error.reason instanceof ActionError) {
                this.showException(error.reason.message)
            }
        });
        window.onerror = (message, file, row, col, error) => {
            if (error instanceof ActionError) {
                this.showException(error.message)
            }
        };
    }
})
</script>

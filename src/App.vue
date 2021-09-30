<template>
    <q-layout view="hHh lpR lFf">
        <router-view />
        <q-card class="my-card">
            <q-card-section>
                <div>{{ 1 }}</div>
            </q-card-section>
        </q-card>
    </q-layout>
</template>
<script>
import authActions from "./actions/AuthActions";
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'
import ActionError from './classes/ActionError'
import axios from 'axios'
import https from 'https'

export default defineComponent({
    name: 'App',
    data: function () {
        return {
            quasar: useQuasar()
        }
    },
    methods: {
        showException: function (message) {
            this.$q.notify({ message })
        }
    },
    computed: {
        isAuth: function () {
            return authActions.getAuthStatus();
        },
        darkMode: function () {
            return this.$store.state.app.darkMode
        },
        sstate: function () {
            return this.$store.state.test.sstate
        }
    },
    watch: {
        darkMode: function (darkMode) {
            this.quasar.dark.set(darkMode)
        }
    },
    created: function () {
        this.quasar.dark.set(this.darkMode)
    },
    preFetch: function ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {

        // At request level
        const agent = new https.Agent({
            rejectUnauthorized: false
        });

        // return store.dispatch('test/test', 1);
        // return new Promise(() => axios.get('https://app.com/api/headers', {httpsAgent: agent}).then(r => this.sstatus = r.data[1]).catch(e => console.log(e)))
    },
    mounted: function () {
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

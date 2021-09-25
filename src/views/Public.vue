<template>
    <q-header
        bordered
        class="bg-primary text-white"
    >
        <q-toolbar>
            <q-btn
                dense
                flat
                round
                icon="menu"
                @click="toggleMenu"
            />

            <q-toolbar-title>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>
                Title
                <auth-component class="float-right"/>
            </q-toolbar-title>
        </q-toolbar>
    </q-header>

    <SideBarPublic />

    <q-page-container>
        <router-view />
    </q-page-container>
</template>

<script>
import SideBarPublic from "../components/SidebarPublic/SideBarPublic.vue"
import { useQuasar } from 'quasar'
import AuthComponent from "../components/AuthPublic/AuthPublic.vue"

export default {
    name: "Public",
    components: {
        SideBarPublic,
        AuthComponent
    },
    data: function () {
        return {
            headerState: {default: true},
            quasar: useQuasar()
        }
    },
    methods: {
        toggleMenu: function () {
            this.$store.dispatch('menu/toggle')
        },
    },
};
</script>

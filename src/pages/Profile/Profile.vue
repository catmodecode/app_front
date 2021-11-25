<template>
    <q-page
        padding
        class="q-pa-md"
    >
        <q-uploader
            class=""
            url="/upload"
            label="user.avatar"
            accept="image/*"
            flat
        />
        <q-form
            @submit="onSubmit"
            @reset="onReset"
        >
            <q-separator spaced />
            <div class="fit column profile-form">
                <q-input
                    class="q-my-md"
                    v-model="name"
                    type="text"
                    label="user.name"
                />
                <q-input
                    class="q-my-md"
                    v-model="email"
                    readonly
                    type="text"
                    label="user.email"
                />
                <q-input
                    class="q-my-md"
                    v-model="phone"
                    readonly
                    type="text"
                    label="user.phone"
                />
                <q-input
                    class="q-my-md"
                    v-model="country"
                    readonly
                    type="text"
                    label="user.country"
                />
                <q-input
                    class="q-my-md"
                    v-model="city"
                    readonly
                    type="text"
                    label="user.city"
                />
            </div>
            <q-btn
                class="q-ml-sm float-right"
                label="Submit"
                type="submit"
                color="primary"
            />
            <q-btn
                class="q-ml-sm float-right"
                label="Reset"
                type="reset"
                color="primary"
                flat
            />
        </q-form>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Profile',
    data () {
        return {
            avatar: '',
            name: '',
            phone: '',
            email: '',
            country: '',
            city: '',
        }
    },
    methods: {
        onSubmit: function () {
            this.$store.dispatch('profile/save', {
                name: this.name,
                email: this.email,
                phone: this.phone,
                country: this.country,
                city: this.city,
            }).then(r => console.log(r))
        },
        onReset: function () {
        },
    },
    mounted: function () {
        this.$store.dispatch('profile/load').then(() => {
            this.name = this.$store.state.profile.name
            this.phone = this.$store.state.profile.phone
            this.email = this.$store.state.profile.email
            this.country = this.$store.state.profile.country
            this.city = this.$store.state.profile.city
        })
    }
})
</script>

<style lang="scss" scoped>
</style>

<template>
    <div>
        <q-btn
            class="float-right"
            color="primary"
            icon="login"
            label="Login"
            @click="showLoginPopup"
        />
        <q-dialog v-model="visibleState">
            <q-card>
                <q-form
                    @submit="authorize"
                    @reset="closePopup"
                >
                    <q-card-section>
                        Авторизация
                    </q-card-section>
                    <q-card-section>
                        <q-input
                            for="email"
                            v-model="login"
                            filled
                            label="Email"
                        />
                    </q-card-section>
                    <q-card-section>
                        <q-input
                            v-model="password"
                            label="Пароль"
                            for="current-password"
                            filled
                            :type="isPwd ? 'password' : 'text'"
                        >
                            <template v-slot:append>
                                <q-icon
                                    :name="isPwd ? 'visibility_off' : 'visibility'"
                                    class="cursor-pointer"
                                    @click="isPwd = !isPwd"
                                />
                            </template>
                        </q-input>
                    </q-card-section>
                    <q-card-section>
                        <q-btn
                            label="Войти"
                            type="submit"
                            color="primary"
                        />
                        <q-btn
                            label="Отменить"
                            type="reset"
                            color="primary"
                            flat
                            class="q-ml-sm"
                        />
                    </q-card-section>
                </q-form>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    name: "AuthPublic",
    data () {
        return {
            login: '',
            password: '',
            visibleState: false,
            isPwd: true,
        }
    },
    methods: {
        showLoginPopup: function () {
            this.visibleState = true;
        },
        closePopup: function () {
            this.visibleState = false;
        },
        authorize: function () {
            this.$store.dispatch('auth/authentificate', {
                email: this.login,
                password: this.password
            })
        }
    },
};
</script>

<style scoped lang="scss">
</style>

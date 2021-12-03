<template>
  <q-header class="header">
    <q-toolbar>
      <q-img src="~assets/logo.png" :ratio="1/1" class="header-logo float-left" @click="$router.push({name: 'index'})" />
      <q-toolbar-title class="no-box-shadow" @click="$router.push({name: 'index'})">
        AR Eagle
      </q-toolbar-title>
      <q-card class="dark-back no-box-shadow q-pa-sm">
        <q-card-section class="row">
          <div class="row">
            <q-select class="q-ma-sm" hide-dropdown-icon use-input input-debounce="0" label="Поиск...">
              <template v-slot:append>
                <q-btn icon="search" dense ripple="false" />
              </template>
            </q-select>
          </div>
          <q-btn-group class="column">
            <q-btn v-if="!logged" color="primary" icon="login" label="Войти" width="130px" height="45px" @click="loginClick"/>
            <template v-else>
            <q-btn color="primary" align="right" icon-right="man" label="Профиль" width="130px" height="45px" @click="$router.push('profile')" />
            <q-btn color="primary" align="right" icon-right="meeting_room" label="Выход" width="130px" height="45px" @click="logout" />
            </template>
          </q-btn-group>
          <q-dialog v-model="loginPrompt">
            <q-card style="min-width: 350px">
              <q-form
                @submit="login"
                class="q-gutter-md"
              >
                <q-card-section>
                  <div class="text-h6">Авторизация</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <q-input v-model="email" filled :type="'text'" name="username" hint="Email" />
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <q-input v-model="password" name="password" filled :type="isPwd ? 'password' : 'text'" hint="Password">
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </q-card-section>
                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="Cancel" type="reset" v-close-popup />
                  <q-btn flat label="Login" type="submit" v-close-popup />
                </q-card-actions>
              </q-form>
            </q-card>
          </q-dialog>
        </q-card-section>
      </q-card>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'header-component',
  data() {
    return {
      loginPrompt: false,
      email: null,
      password: null,
      isPwd: true,
    }
  },
  computed: {
    ...mapGetters({
      logged: 'auth/logged'
    })
  },
  methods: {
    loginClick: function() {
      this.loginPrompt = true;
      console.log(this.logged);
    },
    login: function() {
      this.$store.dispatch('auth/login', {email: this.email, password: this.password});
      this.email = null
      this.password = null
    },
    logout: function() {
      this.$store.dispatch('auth/logout');
    }
  }
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

.dark-back {
  background-color: $dark-page;
}

.row2 {
  display: flex;
  flex-direction: row;
  max-height: 50px;
}

.row2 :nth-child(1n) {
  margin: 5px;
}
</style>
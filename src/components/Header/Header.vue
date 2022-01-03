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
            <q-select class="q-ma-sm" hide-dropdown-icon v-model="search" use-input input-debounce="0" label="Поиск...">
              <template v-slot:append>
                <q-btn icon="search" dense />
              </template>
            </q-select>
          </div>
          <q-btn v-if="!logged" class="profile-button q-ma-sm" color="primary" icon="login" label="Войти" width="130px" height="45px" @click="loginClick"/>
          <q-btn-group class="profile-button q-ma-sm" v-else spread >
            <q-btn color="primary" icon="man" label="cat">
              <q-menu>
                <q-list class="profile-button">
                  <q-item v-for="menuItem in menu" :key="menuItem" clickable v-close-popup>
                    <q-item-section>
                      <div @click="menuItem.callback()">{{ menuItem.caption }}</div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
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
      menu: [],
      search: null,
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
    },
    login: function() {
      this.$store.dispatch('auth/login', {email: this.email, password: this.password});
      this.email = null
      this.password = null
    },
    logout: function() {
      this.$store.dispatch('auth/logout');
    }
  },
  mounted: function() {
    this.menu = [
      {
        caption: 'Профиль',
        callback: () => this.$router.push('profile')
      },
      {
        caption: 'Выход',
        callback: () => this.logout()
      },
    ]
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

.profile-button {
  width: 180px;
}
</style>
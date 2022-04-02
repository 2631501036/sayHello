<template>
  <v-app>
      <!-- <router-link to="/account">登录</router-link>
      <router-link to="/">Home</router-link> -->
      <router-view/>
  </v-app>
</template>

<script>

import { onLine } from './api/user'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{

  },
    mounted() {
        onLine().then((res) => {
            if (res) {
                this.$store.commit('setUserName', res.data)
            }
            
        })
    }
};
</script>

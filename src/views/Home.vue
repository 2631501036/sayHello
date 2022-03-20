<template>
  <v-app id="inspire">
    <!-- left -->
    <v-navigation-drawer v-model="drawer" app>
      <!-- 用户头像和账号昵称 -->
      <user-account></user-account>

      <v-divider>???</v-divider>
      <!-- 左侧导航 -->
      <left-router ></left-router>
    </v-navigation-drawer>

    <!--top-bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-breadcrumbs :items="DashOrAbout" divider="\"></v-breadcrumbs>
    </v-app-bar>

    <!-- main -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import UserAccount from "@/components/UserAccount.vue";
import LeftRouter from "@/components/LeftRouter.vue";

export default {
  data: () => ({
    drawer: null,
    username: "用户名",
    account: "2631501036",
    isTrue:null,
    itemsD: [
      {
        text: "Video",
        disabled: false,
        href: "/dashboard/video",
      },
      {
        text: "Image",
        disabled: false,
        href: "/dashboard/image",
      },
      {
        text: "Music",
        disabled: false,
        href: "/dashboard/music",
      },
    ],
    itemsA: [
      {
        text: "friends",
        disabled: false,
        href: "/about/friends",
      },
      {
        text: "world",
        disabled: false,
        href: "/about/world",
      },
    ],
  }),
  components: {
    UserAccount,
    LeftRouter,
  },

  computed: {
      DashOrAbout() {
          if (this.$route.path.indexOf('dashboard') == -1) {
              return this.itemsA
          }
          return this.itemsD
      }
  },
  methods: {
    imgClick() {
      this.$router.push(this.src);
    }
    
  },
};
</script>
<style scoped>
.idbox {
  display: flex;
  flex-direction: row;
}
</style>
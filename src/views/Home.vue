<template>
  <div>
    <v-app id="inspire">
      <!-- left -->
      <v-navigation-drawer v-model="drawer" app>
        <!-- 用户头像和账号昵称 -->
        <user-account></user-account>

        <v-divider>???</v-divider>
        <!-- 左侧导航 -->
        <left-router></left-router>
      </v-navigation-drawer>

      <!--top-bar -->
      <v-app-bar app>
        <!-- 左侧缩放icon -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- 面包屑导航 -->
        <v-breadcrumbs :items="DashOrAbout" divider="\"></v-breadcrumbs>
      </v-app-bar>

      <!-- main -->
      <v-main>
          <keep-alive>
        <router-view></router-view>
          </keep-alive>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import UserAccount from "@/components/UserAccount.vue";
import LeftRouter from "@/components/LeftRouter.vue";

export default {
  data: () => ({
    drawer: null,
    username: "用户名",
    account: "2631501036",
    isTrue: null,
    itemsD: [
      {
        text: "Movie",
        disabled: false,
        to: "/dashboard/video",
      },
      {
        text: "Image",
        disabled: false,
        to: "/dashboard/image",
      },
      {
        text: "Music",
        disabled: false,
        to: "/dashboard/music",
      },
    ],
    itemsA: [
      {
        text: "friends",
        disabled: false,
        to: "/about/friends",
      },
      {
        text: "world",
        disabled: false,
        to: "/about/world",
      },
    ],
  }),
  components: {
    UserAccount,
    LeftRouter,
  },

  computed: {
    DashOrAbout() {
      if (this.$route.path.indexOf("dashboard") == -1) {
        return this.itemsA;
      }
      return this.itemsD;
    },
  },
  methods: {
    imgClick() {
      this.$router.push(this.src);
    },
  },
};
</script>
<style scoped>
.idbox {
  display: flex;
  flex-direction: row;
}
</style>
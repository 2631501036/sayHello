<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in links"
      :key="i"
      :to="item.toLeave"
      @click="listSubmit(item)"
      link
    >
      <!-- 图标 -->
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <!-- title -->
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import {removeToken} from "@/utils/auth.js";
export default {
  data() {
    return {
      links: [
        { icon: "mdi-call-split", title: "主页", toLeave: "/" },
        { icon: "mdi-message-text", title: "聊天", toLeave: "/about/friends" },
        { icon: "mdi-dialpad", title: "测试", toLeave: "/test" },
        { icon: "mdi-send", title: "退出登录", toLeave: "/" },
      ],
    };
  },
  methods: {
    outLogin() {
      removeToken();
      this.$router.push("/login");
    },
    listSubmit(item) {
      //   console.log(item.title);
      switch (item.title) {
        case "退出登录":
          this.outLogin();
          break;

        default:
          break;
      }
    },
  },
};
</script>
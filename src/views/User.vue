<template>
  <div>
      <!-- 自定义返回按钮 -->
    <div class="back" @click="backLast"><h1>返回</h1></div>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input>
  </div>
</template>
<script>
export default {
  data: () => ({
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
  }),
  methods: {
      backLast() {
          this.$router.go(-1)
      }
  },
};
</script>

<style scoped>
.back{
    width: 100px;
    height: 100px;
    background-color: pink;
}
</style>

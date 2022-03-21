<template>
  <div>
    <!-- 自定义返回按钮 -->
    <div class="back" @click="backLast"><h1>返回</h1></div>
    <v-row align="center" align-content="center" no-gutters>
      <v-col cols="9">
        <v-file-input
          v-model="files"
          placeholder="点击右侧按钮上传"
          label="上传头像"
          multiple
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-paperclip"
          class="fileInput"
        >
          <template v-slot:selection="{}">
            <v-chip small label color="primary">
                准备就绪
              <v-icon dark right small> mdi-checkbox-marked-circle </v-icon>
            </v-chip>
          </template>
        </v-file-input>
      </v-col>
      <v-btn @click="checkImage" color="primary" elevation="2">上传</v-btn>
    </v-row>

    <img class="testImg" :src="this.srcc" alt="" />
  </div>
</template>
<script>
export default {
  data: () => ({
    files: [],
    srcc: "testImg base64 url",
  }),
  methods: {
    checkImage() {
      let file_img = this.files[0];

      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file_img);

      reader.onload = function () {
        // console.log(reader.result);
        // 获取图片的 base64 编码
        that.srcc = reader.result;
      };
    },
    backLast() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.back {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.testImg {
  width: 30vw;
  border-radius: 3px;
  margin-left: 5vw;
}
.fileInput {
  margin-right: 15px;
}
</style>

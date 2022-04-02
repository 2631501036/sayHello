<template>
  <div>
    <!-- 自定义返回按钮 -->
    <div class="back" @click="backLast"><h1>返回</h1></div>
    <v-row align="center" align-content="center" no-gutters>
      <v-col cols="9">
        <v-file-input
          v-model="files"
          label="上传头像"
          multiple
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-paperclip"
          class="fileInput"
          @change="focusa"
          @click:clear="cleara"
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
    <!-- {{ srcc }} -->
    <img class="testImg" :src="this.srcc" alt="" />
  </div>
</template>
<script>
import { upLoadAvator } from "../api/user";
export default {
  data: () => ({
    files: [],
    srcc: "",
  }),
  methods: {
    //   点击
    cleara() {
      this.srcc = "";
    },
    // 改变输入时触发
    focusa() {
      // 获取单张图片
      let file_img = this.files[0];
      // 实例化文件读取对象
      var reader = new FileReader();
      //   保存this回调结束后使用
      var that = this;
      if (file_img) {
          console.log(this.files);
          //   读取图片
      reader.readAsDataURL(file_img);
      //   读取完毕
      reader.onload = function () {
          console.log(reader);
        that.srcc = reader.result;
      };
      }
      
    },
    checkImage() {
      // 获取单张图片
      //   let file_img = this.files[0];
      // 实例化文件读取对象
      //   var reader = new FileReader();
      //   保存this回调结束后使用
      //   var that = this;
      //   读取图片
      //   reader.readAsDataURL(file_img);
      //   reader.onload = function () {
      // console.log(reader.result);
      // 获取图片的 base64 编码
      // that.srcc = reader.result;
      // console.log(reader.result);
      if (this.srcc) {
        let data = {
          account: this.$store.state.account,
          imgList: [this.srcc],
        };
        var that = this;
        upLoadAvator(data).then((res) => {
          if (res) {
            that.$store.commit("setUserName", res.data);
            // console.log(data);
            // console.log(res);
            that.$router.push("/");
          }
        });
      }

      //   };
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

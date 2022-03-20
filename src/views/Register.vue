<template>
  <div class="login">
    <v-container class="loginOverlay">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8>
          <v-card>
            <v-card-text class="pt-4">
              <v-form ref="form">
                <v-text-field
                  label="账号(长度要大于6位哦)"
                  v-model="account"
                  required
                  append-icon="fa-info-circle"
                ></v-text-field>
                <v-text-field
                  label="密码(长度要大于6位哦)"
                  v-model="password"
                  :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showpass ? 'text' : 'password'"
                  @click:append="showpass = !showpass"
                  required
                ></v-text-field>
                <v-text-field
                  label="确认密码"
                  v-model="repassword"
                  :append-icon="showrepass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showrepass ? 'text' : 'password'"
                  @click:append="showrepass = !showrepass"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn class="green white--text" @click="submit">注册</v-btn>
            </v-card-actions>
          </v-card>
          <v-card>
            <v-card-actions>
              <v-btn
                outlined
                color="black"
                to="/login"
                class="green white--text"
                >返回登录</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-snackbar v-model="snackbar" :vertical="vertical">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { register } from "../api/user";
import { setToken } from "../utils/auth";
import { md5 } from "../utils/md5";
export default {
  data: () => ({
    snackbar: false,
    message: "",
    vertical: true,
    showpass: false,
    showrepass: false,
    account: "",
    password: "",
    repassword: "",
  }),
  methods: {
    submit() {
      let newuser = {
        account: this.account,
        password: md5(this.password),
      };
      if (this.account == '' || this.password == '') {
        return;
      }
      register(newuser).then((res) => {
        if (res.data.code == 200) {
          setToken(res.data.token);
          this.$store.commit('setUserActive', true)     //将用户状态置为true
          this.$store.commit('setUserName', res.data)
          this.$router.push({path:"/", query:this.account});
        }else {
            this.showMsg(res.data.msg)
        }

      });
    },
    showMsg(msg) {
        this.message = msg;
        this.snackbar = true
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  background-color: #5dd5c8;
  background-image: url(../assets/accountBac.jpg);
  background-size: cover;
}

h4 {
  font-size: 1em !important;
  padding: 1em;
  color: black;
}
.v-card {
  text-align: center;
  margin: 1em;
}
.v-card__title {
  justify-content: center;
}
.v-btn {
  width: 100%;
}
.v-card {
  padding: 1em;
}
.green {
  margin-bottom: 1em;
}
.create {
  text-transform: capitalize;
  margin-bottom: 1em;
}
</style>
<template>
      <!-- <v-sheet color="grey lighten-4" class="pa-4"> -->
  <v-card class="mx-auto card" max-height="234" max-width="434" tile>
    <v-img
      height="100%"
      :src="this.getAvator"
      max-height="130px"
    >
        <v-row align="center" class="spacer roww" no-gutters >
          <v-col cols="5">
            <a :href="this.getAvator">
              <v-avatar size="64px">
                <img :src="this.getAvator" />
              </v-avatar>
            </a>
          </v-col>

          <v-col>
            <!-- <strong v-html="aaa"></strong> -->
            <a class="wenzi" @click="clickAccount">
              <strong v-html="this.getUserName"></strong>
              <div>
                {{ this.getAccount }}
              </div>
            </a>
          </v-col>
        </v-row>
    </v-img>
  </v-card>
      <!-- </v-sheet> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUserName", "getAccount", "getAvator"]),
  },
  methods: {
    clickAccount() {
      this.$router.push("/user");
    },
  },
};
</script>

<style scoped>
.wenzi {
  color: white;
  text-decoration: none;
}
.roww{
    padding: 10px;
}
</style>
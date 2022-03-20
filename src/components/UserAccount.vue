<template>
  <v-sheet color="grey lighten-4" class="pa-4">
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="5">
        <a :href="this.getAvator">
        <v-avatar size="64px">
          <img :src="this.getAvator" />
        </v-avatar>
        </a>
      </v-col>

      <v-col class="hidden-xs-only">
        <!-- <strong v-html="aaa"></strong> -->
        <a class="wenzi" @click="clickAccount">
            <strong v-html="this.getUserName"></strong>
          <div>
            {{ this.getAccount }}
          </div>
        </a>
      </v-col>
    </v-row>
  </v-sheet>
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
          this.$router.push('/user')
      }
  },
};
</script>

<style scoped>
.wenzi{
    color: black;
    text-decoration: none;
}
</style>
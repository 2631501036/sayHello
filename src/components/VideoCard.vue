<template>
  <v-card light  >
    <!-- <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      >aaaaa</v-progress-linear>
    </template> -->

    <v-img height="15vh" :src="movie.srcc"></v-img>

    <v-card-title class="text-sm-body-2 col-11 text-truncate vtitle">{{
      movie.name
    }}</v-card-title>

    <v-card-text class="text-caption">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="4.1">
          <v-rating
            x-small
            :value="movie.score"
            color="orange"
            dense
            half-increments
            readonly
            size="8"
          ></v-rating>
        </v-col>
        <v-col>
          <div class="pingfentext">{{ movie.score * 2 }}(豆瓣)</div>
        </v-col>
      </v-row>

      <div class="biaoyu">{{ movie.slogan }}</div>

      <div>{{ movie.explain }}</div>
    </v-card-text>

    <!-- <v-divider class="mx-4"></v-divider> -->

    <!-- <v-card-title>Tonight's availability</v-card-title> -->

    <!-- <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text> -->

    <!-- <v-row justify="end"> -->
    <v-card-actions>
      <v-btn class="btn" color="#CBB7F2" @click="reserve"> 播放 </v-btn>
    </v-card-actions>
    <!-- </v-row> -->
  </v-card>
</template>


<script>
export default {
  data: () => ({
    selection: 1,
  }),

  methods: {
    reserve() {
    //   this.loading = true;
    //   let that = this
    //   setTimeout(() => {
    //     this.loading = false;
        this.$router.push({path:'/videoplay', query:{"moviename":`${this.movie.name}`}})
    //   }, 500);
    },
  },
  props: ["movie"],
};
</script>

<style scoped>
.vtitle {
  display: inline-block;
}
.pingfentext {
  font-size: 10px;
}
.biaoyu {
  font-size: 14px;
  color: black;
}
.btn {
  margin-left: auto;
  margin-right: 3px;
}
</style>
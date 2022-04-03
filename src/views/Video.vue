<template>
  <div>
    <!-- 轮播 -->

    <home-swiper :banners="this.banners"></home-swiper>
    <v-container>
      <v-row
        align-content="space-around"
        align="center"
        justify-content="space-around"
      >
        <v-col cols="6" sm="2" v-for="(item, index) in movies" :key="index">
          <video-card :movie="item"></video-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VideoCard from "@/components/VideoCard";
import HomeSwiper from "@/components/swiper/HomeSwiper";
export default {
  data() {
    return {
      movies: [
        {
          name: "比海更深",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "xiao 的救赎",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "步履不停",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "Mr LI ANG",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "功夫",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "我想吃掉你的胰脏",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "低俗小说",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "猜火车",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "小时代",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "复仇者联盟",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
        {
          name: "勇敢的心",
          srcc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          score: 5,
          slogan: "最接近人生的电影",
          explain: "人生步履不停，爱情就像台风；幸福如中彩票，亲情比海更深。",
        },
      ],
      banners: [
        {
          image: "http://94188.xyz/document/swiper/test1.jpg",
          link: "http://94188.xyz/document/swiper/test1.jpg",
        },
        {
          image: "http://94188.xyz/document/swiper/test1.jpg",
          link: "http://94188.xyz/document/swiper/test2.jpg",
        },
        {
          image: "http://94188.xyz/document/swiper/test1.jpg",
          link: "http://94188.xyz/document/swiper/test2.jpg",
        },
      ],
    };
  },
  components: {
    VideoCard,
    HomeSwiper,
  },
  
};
</script>
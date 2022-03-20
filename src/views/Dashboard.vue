<template>
  <div class="about">
    <h1>这里是主页面</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created () {
        console.log("dashboard");
    }
}
</script>



<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
    /* background-color: red; */
    
  }
  .slide img {
    width: 100%;
    box-shadow: 10px 0px 5px 1px gray;
  }
</style>
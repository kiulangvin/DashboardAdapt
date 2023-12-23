<script setup>
// import Comps from "@/components/Comps.vue"
import TestChart from "@/components/TestChart.vue"

</script>

<template>
  <div class="HomePage-container">
    <!-- <Comps /> -->
    <TestChart></TestChart>
  </div>
</template>

<style scoped lang="less">
.HomePage-container {
  // height: 100%;
  // width: 100%;
  .px2vw(width, 1920);
  .px2vh(height, 1080);
  .px2font(16);
  background-color: black;
}
</style>
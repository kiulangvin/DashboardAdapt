<script setup>
// import { defineOptions, ref, reactive, toRefs, onMounted} from 'vue'
defineOptions({
    name: "L-RightContainer"
})

</script>

<template>
    <div class="RightContainer-container">
        <!-- 右侧内容 -->
        <slot name="right"></slot>
    </div>
</template>

<style scoped lang="less">
.RightContainer-container {
    position: relative;
    .px2vw(width, 450);
    height: 100vh;
    border: 1px solid red;
}
</style>
<script setup>
// import { defineOptions, ref, reactive, toRefs, onMounted} from 'vue'
defineOptions({
    name: "L-Header"
})

</script>

<template>
    <div class="Header-container">
        <!-- 头部组件 -->
        <slot name="header"></slot>
    </div>
</template>

<style scoped lang="less">
.Header-container {
    background-color: darkslategray;
    position: relative;
    .px2vh(height, 100);
}
</style>
<script setup>
// import { defineOptions, ref, reactive, toRefs, onMounted} from 'vue'
defineOptions({
    name: "L-CenterContainer"
})

</script>

<template>
    <div class="CenterContainer-container">
        <!-- 中间内容 -->
        <slot name="center"></slot>
    </div>
</template>

<style scoped lang="less">
@designWidth: 2160;

.CenterContainer-container {
    position: relative;
    width: 100%;
    height: 100vh;
    border: 1px solid red;
}
</style>
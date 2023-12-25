<script setup>
// import { defineOptions, ref, reactive, toRefs, onMounted} from 'vue'
defineOptions({
    name: "L-RightContainer"
})
// 传值
const props = defineProps({
    boxStyle: {
        type: Object,
        default: () => ({})
    },
})

const styles = {
    box: {
        width: `450px`,
        height: `100%`
    },
}
</script>

<template>
    <div class="RightContainer-container" :style="{ ...styles.box, ...props.boxStyle }">
        <!-- 右侧内容 -->
        <slot name="right"></slot>
    </div>
</template>

<style scoped lang="less">
.RightContainer-container {
    position: relative;
    .px2vw(width, 450);
    height: 100%;
    background-color: bisque;
    padding: 10px;
}
</style>
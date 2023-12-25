<script setup>
// import { defineOptions, ref, reactive, toRefs, onMounted} from 'vue'
defineOptions({
    name: "L-Header"
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
        width: `100%`,
        height: `100px`
    },
}

</script>

<template>
    <div class="Header-container" :style="{ ...styles.box, ...props.boxStyle }">
        <!-- 头部组件 -->
        <slot name="header"></slot>
    </div>
</template>

<style scoped lang="less">
.Header-container {
    background-color: darkslategray;
    position: relative;
}
</style>
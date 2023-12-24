<script setup>
import { px2vw, px2vh } from "../../utils/common"

import { defineOptions, defineProps, computed } from 'vue'
defineOptions({
    name: "L-LeftContainer"
})

// 传值
const props = defineProps({
    boxStyle: {
        type: Object,
        default: () => ({})
    },
})

const clone_boxStyle = computed(() => {
    let clone_boxStyle = {}
    if (props.boxStyle.width) {
        clone_boxStyle.width = `${px2vw(props.boxStyle.width)}vw`
    } if (props.boxStyle.height) {
        clone_boxStyle.height = `${px2vh(props.boxStyle.height)}vh`
    }
    return { ...props.boxStyle, clone_boxStyle }
})

const styles = {
    box: {
        width: `${px2vw(450)}vw`,
        height: `100vh`
    },
}


</script>

<template>
    <div class="LeftContainer-container" :style="{ ...styles.box, ...clone_boxStyle }">
        <!-- 左侧内容 -->
        <slot name="left"></slot>
    </div>
</template>

<style scoped lang="less">
.LeftContainer-container {
    position: relative;
    border: 1px solid red;

}
</style>
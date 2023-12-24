<script setup>
// 组件引入
import FitScreenScale from "@/components/FitScreenScale.vue"
import Header from "@/components/layout/header.vue";
import LeftContainer from "@/components/layout/LeftContainer.vue";
import CenterContainer from "@/components/layout/CenterContainer.vue";
import RightContainer from "@/components/layout/RightContainer.vue";

import TestChart from "@/components/TestChart.vue"

import { defineOptions, reactive } from 'vue'
defineOptions({
    name: "L-index"
})
const data = reactive({
    leftBoxStyle: {
        width: 450,
        "background-color": "#000"
    }
})

</script>

<template>
    <FitScreenScale>
        <Header>
            <template #header>
                <h3>大屏标题</h3>
            </template>
        </Header>
        <div class="content">
            <LeftContainer :boxStyle="data.leftBoxStyle">
                <template #left>
                    <h3>左侧内容</h3>
                    <TestChart></TestChart>
                </template>
            </LeftContainer>
            <CenterContainer>
                <template #center>
                    <h3>中间内容</h3>
                </template>
            </CenterContainer>
            <RightContainer>
                <template #right>
                    <h3>右侧内容</h3>
                </template>
            </RightContainer>
        </div>
    </FitScreenScale>
</template>

<style scoped lang="less">
.content {
    display: flex;
    height: calc(100% - 100px);
    position: relative;
}
</style>
<script setup>

import { onMounted, getCurrentInstance } from 'vue';


const { proxy } = getCurrentInstance();

onMounted(() => {
    initChart()
});
// const option = reactive({});

const initChart = () => {
    let myChart = proxy.$echarts.init(proxy.$refs.chart);
    const option = {
        title: {
            text: ''
        },
        backgroundColor: "transparent",
        grid: {
            left: proxy.$fitChartSize(10),
            right: proxy.$fitChartSize(20),
            top: proxy.$fitChartSize(20),
            bottom: proxy.$fitChartSize(10),
            containLabel: true,
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c}%",
        },
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                color: ["#0db1cdcc"],
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    };
    myChart.setOption(option, true);
}



</script>

<template>
    <div class="testChart-container">
        <div ref="chart" v-chart-resize class="chart"></div>
    </div>
</template>

<style scoped lang="less">
.testChart-container {
    width: 300px;
    height: 300px;

    .chart {
        width: 100%;
        height: 100%;
    }
}
</style>
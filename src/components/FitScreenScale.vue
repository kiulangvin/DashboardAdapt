<script setup>

import { isValid, debounce } from "../utils/common"

import { defineOptions, defineProps, ref, reactive, onMounted, nextTick, onUnmounted } from 'vue'

defineOptions({
    name: "L-FitScreenScale"
})

// 传值
const props = defineProps({
    // 宽度
    width: {
        type: [String, Number],
        default: 1920
    },
    // 高度
    height: {
        type: [String, Number],
        default: 1080
    },
    // 是否全屏
    fullScreen: {
        type: Boolean,
        default: false
    },
    // 是否自动缩放
    // 默认值是 true，即在屏幕尺寸变化时，自动缩放
    autoScale: {
        type: Boolean,
        default: true
    },
    // 是否开启平滑缩放
    // 默认值是 true，即在屏幕尺寸变化时，平滑缩放 
    smoothScale: {
        type: Boolean,
        default: true
    },
    boxStyle: {
        type: Object,
        default: () => ({})
    },
    wrapperStyle: {
        type: Object,
        default: () => ({})
    },
    //
    debounceTime: {
        type: Number,
        default: 500
    },
    bodyOverflowHidden: {
        type: Boolean,
        default: true
    }
})

// 响应式值
const data = reactive({
    width: 0,
    height: 0,
    originalWidth: 0,
    originalHeight: 0,
    observer: null | MutationObserver
})

// 跟template的 ref 同名绑定
const el = ref(null);

const styles = {
    box: {
        overflow: 'hidden',
        backgroundSize: `100% 100%`,
        backgroundColor: `#fff`,
        width: `100vw`,
        height: `100vh`
    },
    wrapper: {
        transitionProperty: `all`,
        transitionTimingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDuration: `500ms`,
        position: `relative`,
        overflow: `hidden`,
        zIndex: 100,
        transformOrigin: `left top`
    }
}

let bodyOverflowHidden2 = "";


const initBodyStyle = () => {
    if (props.bodyOverflowHidden) {
        bodyOverflowHidden2 = document.body.style.overflow
        document.body.style.overflow = 'hidden'
    }
}
const initMutationObserver = () => {
    const observer = (data.observer = new MutationObserver(() => {
        resizeHandler()
    }))
    if (isValid(el.value)) {
        observer.observe(el.value, {
            attributes: true,
            attributeFilter: ['style'],
            attributeOldValue: true
        })
    }

}

onMounted(() => {
    initBodyStyle()
    nextTick(async () => {
        await initScreenSize();
        updateScreenSize();
        updateScreenScale();
        //监听窗口变化，动态设置大屏容器宽高
        window.addEventListener('resize', resizeHandler)
        initMutationObserver();
    })
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
    data.observer?.disconnect()
    if (props.bodyOverflowHidden) {
        document.body.style.overflow = bodyOverflowHidden2;
    }
})

/**
 * 初始化大屏容器宽高
 */
const initScreenSize = () => {
    return new Promise(resolve => {
        if (props.width && props.height) {
            data.width = props.width
            data.height = props.height
        } else {
            data.width = el.value?.clientWidth // <=> el.value.clientWidth 否则返回undefined
            data.height = el.value?.clientHeight
        }
        if (!data.originalHeight || !data.originalWidth) {
            data.originalWidth = window.screen.width
            data.originalHeight = window.screen.height
        }

        resolve()

    })
}

/**
 * 更新大屏容器宽高
 */
const updateScreenSize = () => {
    if (data.width && data.height) {
        if (isValid(el.value)) {
            el.value.style.width = `${data.width}px`
            el.value.style.height = `${data.height}px`
        }
    } else {
        if (isValid(el.value)) {
            el.value.style.width = `${data.originalWidth}px`
            el.value.style.height = `${data.originalHeight}px`
        }
    }
}
/**
 * 更新屏幕的scale
 */
const updateScreenScale = () => {
    // 获取真实视口尺寸
    const currentWidth = document.body.clientWidth
    const currentHeight = document.body.clientHeight
    // 获取大屏最终的宽高
    const realWidth = data.width || data.originalWidth
    const realHeight = data.height || data.originalHeight
    // 计算缩放比例
    const widthScale = currentWidth / +realWidth
    const heightScale = currentHeight / +realHeight
    // 若要铺满全屏，则按照各自比例缩放
    if (props.fullScreen) {
        if (isValid(el.value)) {
            el.value.style.transform = `scale(${widthScale},${heightScale})`
            return false
        }

    }
    // 按照宽高最小比例进行缩放
    const scale = Math.min(widthScale, heightScale)
    setScreenScale(scale);
}
/**
 * 设置屏幕的scale
 */
const setScreenScale = (scale) => {
    if (!props.autoScale) return
    if (isValid(el.value)) {
        const domWidth = el.value.clientWidth
        const domHeight = el.value.clientHeight
        const currentWidth = document.body.clientWidth
        const currentHeight = document.body.clientHeight
        el.value.style.transform = `scale(${scale},${scale})`
        let mx = Math.max((currentWidth - domWidth * scale) / 2, 0)
        let my = Math.max((currentHeight - domHeight * scale) / 2, 0)
        if (typeof props.autoScale === 'object') {
            !props.autoScale.x && (mx = 0)
            !props.autoScale.y && (my = 0)
        }
        el.value.style.margin = `${my}px ${mx}px`
    }


}

/**
 * 监听窗口大小变化
 */
const resizeHandler = debounce(async () => {
    await initScreenSize();
    updateScreenSize();
    updateScreenScale();
}, props.debounceTime, false)



</script>

<template>
    <div class="fit-screen-scale-container" :style="{ ...styles.box, ...props.boxStyle }">
        <div class="screen-wrapper" :style="{ ...styles.wrapper, ...props.wrapper }" ref="el">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="less"></style>
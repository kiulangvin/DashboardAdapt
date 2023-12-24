export  function isValid(x) {
    return x !== undefined && x !== null;
}

export function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments; 
        if (timeout) clearTimeout(timeout); // timeout 不为null
        if (immediate) {
            let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) {
                func.apply(context, args)
            }
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}

// px 转为 vw 的函数(不带单位)
export function px2vw(px, designWidth = 2160) {
    return (px / designWidth) * 100;
}
// px 转为 vh 的函数 (不带单位) 
export function px2vh(px, designHeight = 1440) {
    return (px / designHeight) * 100;
}
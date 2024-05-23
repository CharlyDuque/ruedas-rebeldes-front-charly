// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore

// Avoid costly calculations while the window size is in flux.
// window.addEventListener("resize", debounce(handler, 100))
export const debounce = (func, wait, immediate) => {
  var timeout
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)
    if (immediate && !timeout) func.apply(context, args)
  }
}

// Avoid running the same function twice within the specified timeframe.
// window.addEventListener("resize", throttle(handler, 100))
export const throttle = (func, timeFrame) => {
  var lastTime = 0
  return function () {
    var now = new Date()
    if (now - lastTime >= timeFrame) {
      func()
      lastTime = now
    }
  }
}

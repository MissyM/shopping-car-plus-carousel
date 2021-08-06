import { useRef } from 'react'

import './carousel.scss'

function checkVisible(refElm, elm) {
  var refElmRect = refElm.getBoundingClientRect()
  var elmRect = elm.getBoundingClientRect()

  return elmRect.left > refElmRect.left && elmRect.right < refElmRect.right
}

function findNextVisibleElement(refElm, list = [], reverse = false) {
  if (reverse) {
    for (let i = list.length - 1; i >= 0; i--) {
      const elm = list[i]
      if (checkVisible(refElm, elm)) {
        return elm
      }
    }
    return null
  } else {
    for (let i = 0; i < list.length; i++) {
      const elm = list[i]
      if (checkVisible(refElm, elm)) {
        return elm
      }
    }
    return null
  }
}

// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
const requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

// main function
function scrollToX(element, scrollTargetX, speed, easing) {
  // scrollTargetX: the target scrollX property of the window
  // speed: time in pixels per second
  // easing: easing equation to use

  var scrollX = element.scrollLeft,
    scrollTargetX = scrollTargetX || 0,
    speed = speed || 2000,
    easing = easing || 'easeOutSine',
    currentTime = 0

  // min time .1, max time .8 seconds
  var time = Math.max(
    0.1,
    Math.min(Math.abs(scrollX - scrollTargetX) / speed, 0.8)
  )

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  var easingEquations = {
    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2))
    },
    easeInOutSine: function (pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1)
    },
    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5)
      }
      return 0.5 * (Math.pow(pos - 2, 5) + 2)
    },
  }

  // add animation loop
  function tick() {
    currentTime += 1 / 60

    var p = currentTime / time
    var t = easingEquations[easing](p)

    if (p < 1) {
      requestAnimFrame(tick)

      element.scrollLeft = scrollX + (scrollTargetX - scrollX) * t
    } else {
      element.scrollLeft = scrollTargetX
    }
  }

  // call it once to get started
  tick()
}

// scroll it!

const Carousel = ({ children }) => {
  const scrollableElmRef = useRef(null)
  const prev = () => {
    const scrollableElm = scrollableElmRef.current
    if (!scrollableElm) {
      return
    }

    const nextVisibleElm = findNextVisibleElement(
      scrollableElm,
      Array.from(scrollableElm?.children)
    )

    const scrollableElmRect = scrollableElm.getBoundingClientRect()
    const nextVisibleElmRect = nextVisibleElm.getBoundingClientRect()

    scrollToX(
      scrollableElm,
      scrollableElm.scrollLeft -
        (scrollableElmRect.right - nextVisibleElmRect.left),
      2500,
      'easeInOutQuint'
    )
  }

  const next = () => {
    const scrollableElm = scrollableElmRef.current
    if (!scrollableElm) {
      return
    }

    const nextVisibleElm = findNextVisibleElement(
      scrollableElm,
      Array.from(scrollableElm?.children),
      true
    )

    const scrollableElmRect = scrollableElm.getBoundingClientRect()
    const nextVisibleElmRect = nextVisibleElm.getBoundingClientRect()

    scrollToX(
      scrollableElm,
      scrollableElm.scrollLeft +
        nextVisibleElmRect.right -
        scrollableElmRect.left,
      2500,
      'easeInOutQuint'
    )
  }

  return (
    <div className="container">
      <div className="button-left" onClick={prev}>
        &#60;
      </div>
      <div className="scrollable" ref={scrollableElmRef}>
        {children}
      </div>
      <div className="button-right" onClick={next}>
        &#62;
      </div>
    </div>
  )
}

export default Carousel

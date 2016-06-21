var hasTouch = ('ontouchstart' in window);
var Env = {
  itemH: 145,
  hasTouch: hasTouch,
  event: (function(f) {
    return f ? {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    } : {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    };
  })(hasTouch),
  transformProperty: 'webkitTransform',
  transitionEndEvent: 'webkitTransitionEnd'
};

module.exports = Env;

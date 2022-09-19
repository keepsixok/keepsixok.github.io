var chumbapath = anime.path('.chumba-path')

var tl = anime.timeline({
  targets: '.chumbaimg',
  duration: 5000, // Can be inherited
  // easing: 'linear', // Can be inherited
  easing: 'cubicBezier(.5, .05, .1, .3)',
  // direction: 'alternate',
  loop: true
});

// Add children
tl
.add({
  translateX: chumbapath('x'),
  translateY: chumbapath('y'),
  rotate: chumbapath('angle')
})
.add({
  scaleX: -1,
  duration: 1000,
})
.add({
  translateX: 0,
  translateY: 10
})
.add({
  scaleX: 1,
  duration: 1000,
})



































var motionpath = anime.path('.motion-path-demo path');
anime({
  targets: '.motion-path-demo .el',
  translateX: motionpath('x'),
  translateY: motionpath('y'),
  rotate: motionpath('angle'),
  easing: 'linear',
  direction: 'alternate',
  duration: 5000,
  loop: true
});


var element = document.querySelector('.image')
var svgEl = document.getElementById('svgRotate')
function getTranslateX() {

  var transX = window.getComputedStyle(element);
  var matrix = new WebKitCSSMatrix(transX.transform);
  var num = matrix.e;
  console.log(num);
   
  }
  



getTranslateX()



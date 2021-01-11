<template>
  <div class="app-chart-circle">
    <canvas width="250" height="250" id="myCanvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {

    var canvas = document.getElementById('myCanvas')
    var context = canvas.getContext('2d')
    var x = canvas.width / 2
    var y = canvas.height / 2
    var radius = 100
    var endPercent = 350
    var curPerc = 0
    var anticlockwise = false; // clockwise or anticlockwise
    var circ = Math.PI * 2
    var startAngle = 180

    context.lineWidth = 8
    context.strokeStyle = '#6EB63B'
    context.lineCap = 'round';


    function degreesToRadians (degrees) {
      return degrees * (Math.PI/180)
    }

    function radiansToDegrees (radians) {
      return radians * (180/Math.PI)
    }


    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.beginPath()
        context.arc(125, 125, radius, degreesToRadians(startAngle) - Math.PI / 2, degreesToRadians(startAngle + curPerc) - Math.PI / 2, anticlockwise)
        context.stroke()
        curPerc += 5
        if (curPerc < endPercent) {
            requestAnimationFrame(function () {
                animate()
            })
        }
    }

    animate()

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.app-chart-circle {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  #myCanvas {
    // border: 1px solid black;
  }
}



</style>

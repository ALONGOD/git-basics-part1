'use strict'

var initialSize = 100
function onBallClick(elBall) {
    initialSize += 50
    elBall.style.width = initialSize + "px"
    elBall.style.height = initialSize + "px"
}
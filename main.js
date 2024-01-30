'use strict'

var initialSize = 100
function onBallClick(elBall) {
    initialSize += getRandomInt(20, 60)
    if (initialSize >= 400) initialSize = 100
    elBall.style.width = initialSize + "px"
    elBall.style.height = initialSize + "px"
    elBall.innerText = initialSize

    elBall.style.backgroundColor = getRandomColor()

}
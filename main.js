'use strict'

var initialSize = 10
function onBallClick(elBall, maxSize) {
    initialSize += getRandomInt(20, 60)
    if (initialSize >= maxSize) initialSize = 100
    elBall.style.width = initialSize + "px"
    elBall.style.height = initialSize + "px"
    elBall.innerText = initialSize

    elBall.style.backgroundColor = getRandomColor()

}


function onThirdBallClick() {
    var elFirstBall = document.querySelector('.ball')
    var elSecondBall = document.querySelector('.second')
    elFirstBall.style.backgroundColor = getRandomColor()
    elFirstBall.style.height = getRandomInt(20, 200) + 'px'
    elFirstBall.style.width = getRandomInt(20, 200) + 'px'
    elSecondBall.style.height = getRandomInt(20, 200) + 'px'
    elSecondBall.style.width = getRandomInt(20, 200) + 'px'
    elSecondBall.style.backgroundColor = getRandomColor()
}
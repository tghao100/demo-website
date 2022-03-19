
var slider = document.querySelector('.slider');
var sliderImg = slider.clientWidth
var imgChuyen = document.querySelectorAll('.slider-item')
var imgLength = imgChuyen.length

var max = sliderImg * imgLength
max -= sliderImg
var rigth = new Hammer (document.querySelector('.i-right'))
var left = document.querySelector('.i-left')
var sliderContainer = document.querySelector('.slider-container')
var chuyen = 0

function next(){
    if(chuyen < max)
        chuyen += sliderImg
    else 
        chuyen =  0
    sliderContainer.style.marginLeft = '-' + chuyen + 'px'
}

rigth.onswipe = function () {
    next()
}

console.log(rigth)

function back(){
    if(chuyen == 0)
        chuyen = max
    else 
        chuyen -= sliderImg
    sliderContainer.style.marginLeft = '-' + chuyen + 'px'
}

left.onclick = function () {
    back()
}

setInterval (function (){
    next()
}, 5000)


// end slider

// subnav

var subNav = document.querySelector('.sub-item')
var pages = document.querySelector('.pages')

function showsubNav() {
    subNav.classList.toggle('open')
}

function hiddensubNav(){
    subNav.classList.remove('open')
}

pages.addEventListener('click', showsubNav)

// slider.addEventListener('click', hiddensubNav)

// Số tăng dần

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
  }
function animateNumber(finalNumber, duration = 2000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
      const elapsedTime = currentTime - startTime
      if (elapsedTime > duration) {
        callback(finalNumber)
      } else {
        const rate = elapsedTime / duration
        const currentNumber = Math.round(rate * finalNumber)
        callback(currentNumber)
        requestAnimationFrame(updateNumber)
      }
    }
    requestAnimationFrame(updateNumber)
  }
  
  document.addEventListener('scroll', function () {
    animateNumber(2500, 2000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.querySelector('.number-25').innerText = formattedNumber
    })
    
    animateNumber(1500, 2000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.querySelector('.number-15').innerText = formattedNumber
    })
    
    animateNumber(1280, 2000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.querySelector('.number-12').innerText = formattedNumber
    })

    animateNumber(1020, 2000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.querySelector('.number-10').innerText = formattedNumber
    })
})

// position-quanlity

var modalPosition = document.querySelector('.position-text-content-item')
var positionImg = modalPosition.clientWidth
var positionChuyen = document.querySelectorAll('.text-content-item-card-small')

var positionLength = positionChuyen.length

var maxposition = positionImg * positionLength
maxposition -= positionImg
var rigthposition = document.querySelector('.position-i-right')
var leftposition = document.querySelector('.position-i-left')
var positionContainer = document.querySelector('.text-content-item-card')
var chuyenposition = 0

function nextPosition(){
    if(chuyenposition < maxposition)
        chuyenposition += positionImg
    
    positionContainer.style.marginLeft = '-' + chuyenposition + 'px'
    positionContainer.style.transition = "all 0.3s"
}

rigthposition.onclick = function () {
    nextPosition()
}

function backPosition(){
  if(chuyenposition > 1)
    chuyenposition -= positionImg

    positionContainer.style.marginLeft = '-' + chuyenposition + 'px'
}

leftposition.onclick = function () {
    backPosition()
}

//end position-quanlity

// //Question

var question = document.querySelectorAll('.client-question')

question.forEach((questions, index) => {
  question[index].onclick = function() {
    var reply = this.nextElementSibling
    if (reply.style.display === "block") {
      reply.classList.remove('open-reply')
    } else {
      reply.classList.toggle('open-reply')
    }
  }
})


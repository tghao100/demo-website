//chuyen slide modal

var Imgx2 = document.querySelector('.modal-imgx2');
var sliderImgx2 = Imgx2.clientWidth
var imgChuyenImgx2 = document.querySelectorAll('.img-slider')

var imgLengthImgx2 = imgChuyenImgx2.length

var maxImg = sliderImgx2 * imgLengthImgx2
maxImg -= sliderImgx2
var rigthImg = document.querySelector('.imgx2-i-right')
var leftImg = document.querySelector('.imgx2-i-left')
var imgx2container = document.querySelector('.modal-imgx2-container')
var chuyenImg = 0

rigthImg.addEventListener('click', function nextImg(){
  if(chuyenImg < maxImg)
      chuyenImg += sliderImgx2
  else 
      chuyenImg =  0
  imgx2container.style.marginLeft = '-' + chuyenImg + 'px'
})

leftImg.addEventListener('clicl', function backImg(){
  if(chuyenImg == 0)
      chuyenImg = maxImg
  else 
      chuyenImg -= sliderImgx2
  imgx2container.style.marginLeft = '-' + chuyenImg + 'px'
})

// end chuyen slide modal

// modal imgx2

var imgHovers = document.querySelectorAll('.img-hover')
var modalImg = document.querySelector('.modal-img')
var modalCloseImg = document.querySelector('.modal-close-img')
var modalContainerImg = document.querySelector('.modal-container-img')

function showImg() {
  modalImg.style.visibility = "visible"
}

function hiddenImg() {
  modalImg.style.visibility = "hidden"
}

for(const imgHover of imgHovers){
  imgHover.addEventListener('click', function () {
    showImg()
    imgHover.style.transition = "all 0s ease-in"
  })
}

modalContainerImg.addEventListener('click', function(e){
  e.stopPropagation()
})

modalImg.addEventListener('click', function () {
  hiddenImg()
})

modalCloseImg.addEventListener('click', function () {
  hiddenImg()
})
// //end modal-imgx2

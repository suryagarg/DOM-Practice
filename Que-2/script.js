const newbtn = document.querySelector('button')
const firstImg = document.querySelector("#firstImg")
const secondImg = document.querySelector("#secondImg")
newbtn.addEventListener("click",function(){
    const src1 = firstImg.src
    const src2 = secondImg.src

    firstImg.src = src2
    secondImg.src = src1
})
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const h3 = document.querySelector("h3")

let val;
start.addEventListener("click",function(){
    let count = 0;
    val = setInterval(function(){
            h3.innerHTML = count
            count++;
    },1000)
})
stop.addEventListener("click",function(){
    clearInterval(val)
})
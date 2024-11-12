const add = document.querySelector("#add")
const inp = document.querySelector("input")
const remove = document.querySelector("#remove")
const ul = document.querySelector("ul")
let li
add.addEventListener("click",function(){
    li = document.createElement("li")
    if(inp.value.trim() === ''){}
    else{
        li.innerHTML = inp.value
        ul.appendChild(li)
        inp.value = ''
    }
})

remove.addEventListener("click",function(){
    ul.removeChild(li)
})
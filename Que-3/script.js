const form = document.querySelector("form")
const h4 = document.querySelector("h4")
const val = document.querySelectorAll('input[type="text"]')
// const val1 = document.querySelector("#inp1")
// const val2 = document.querySelector("inp2")
form.addEventListener("submit",function(event){
    event.preventDefault()
    for(let i= 0; i<val.length; i++){
        if(val[i].value.trim() === ''){
            h4.innerHTML = "Error, some input is not filled"
            h4.style.color = 'red'
            break;
        }else{
            h4.innerHTML = "Form Submitted Successfully."
            h4.style.color = 'green'
        }
    }
})
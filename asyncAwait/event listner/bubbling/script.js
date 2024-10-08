var div = document.querySelector("div")
var button1 = document.querySelector("button")
var button2 = document.querySelector(".btn")
div.addEventListener("click",()=>{
    console.log("div")
})
button1.addEventListener("click",()=>{
    console.log('button')
}) 
button2.addEventListener("click",()=>{
    console.log('btn')
}) // use capture parameter
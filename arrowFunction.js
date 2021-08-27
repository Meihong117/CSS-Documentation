function sum(a,b){
    return a+b
}
//convert
 let sum=(a,b)=>a+b


function isPosotive(number){
    return number>=0
}
//convert
let isPosotive=number=>number>=0


function rendomNumber(){
    return Math.rendom
}
//convert
let rendomNumber=()=>Math.rendom

document.addEventListener('click', function(){
    console.log('click')
})
//convert
document.addEventListener('click', ()=>console.log('click'))
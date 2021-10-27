const BTN_PLUS  = document.querySelector('#btnPlus')
const BTN_MINUS = document.querySelector('#btnMinus')
const RESULT    = document.querySelector('#result') 
let   result = 0

BTN_PLUS.addEventListener('click', function(){
    result++
    RESULT.innerHTML = result
})

BTN_MINUS.addEventListener('click', function(){
    result--
    RESULT.innerHTML = result
})
const BTN_PLUS  = document.querySelector('#btnPlus')
const BTN_MINUS = document.querySelector('#btnMinus')
const RESULT    = document.querySelector('#result') 
let   result    = localStorage.getItem('result') ? Number (localStorage.getItem('result')) : 0


BTN_PLUS.addEventListener('click', function(){
    result++
    localStorage.setItem('result', result)
    RESULT.innerHTML = localStorage.getItem('result')
})

BTN_MINUS.addEventListener('click', function(){
    result--
    localStorage.setItem('result', result)
    RESULT.innerHTML = localStorage.getItem('result')
})
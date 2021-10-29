let userForm = document.querySelector('#userForm')
userForm.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (message) => 
`<div class="red">${message}</div>`

function formHandler(e) {
    e.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE     = document.querySelector('#score')
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value = ""
        SCORE.value     = ""
    }else{
        alertDOM.innerHTML = alertFunction("hatali giris")
    }
}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
  let liDOM = document.createElement('li')
  liDOM.innerHTML = `${userName} ${score}`
  liDOM.classList.add('green')
  userListDOM.append(liDOM)
}
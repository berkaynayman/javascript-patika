let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() // submit işlemini engelledik
    console.log("işlem gerçekleşti")
}

let userName
let password

function handleSubmit(e) {
    e.preventDefault()
    console.log(`username : ${userName} - password : ${password}`)
}

function handleChange(e) {
    if(e.target.name === "username"){
        userName = e.target.value
    }
    if(e.target.name === "password"){
        password = e.target.value
    }
}